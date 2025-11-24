import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js'
import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import fs from 'fs'
import path from 'path'
import { Groq } from 'groq-sdk'

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

// Load profile data
function loadProfileData() {
  try {
    const dataPath = path.join(process.cwd(), 'digitaltwin.json')
    const rawData = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(rawData)
  } catch (error) {
    console.error('Error loading profile data:', error)
    throw error
  }
}

// Keyword-based search implementation
function searchProfile(question: string) {
  const data = loadProfileData()
  const questionLower = question.toLowerCase()
  const keywords = questionLower.split(/\s+/).filter((k) => k.length > 0)
  const results: Array<{ title: string; content: string; score: number }> = []

  if (data.content_chunks && Array.isArray(data.content_chunks)) {
    for (const chunk of data.content_chunks) {
      const chunkText = `${chunk.title} ${chunk.content}`.toLowerCase()
      let score = 0
      for (const keyword of keywords) {
        const regex = new RegExp(`\\b${keyword}`, 'gi')
        const matches = (chunkText.match(regex) || []).length
        score += matches * 2
      }
      const titleLower = chunk.title.toLowerCase()
      for (const keyword of keywords) {
        if (titleLower.includes(keyword)) {
          score += 5
        }
      }
      results.push({ title: chunk.title, content: chunk.content, score })
    }
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 3)
}

// Generate RAG response using Groq
async function generateResponse(question: string, context: string) {
  try {
    const message = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content:
            'You are an AI digital twin assistant representing Jhon Danver. Answer questions as if you are the person, speaking in first person about your background, skills, and experience. If the question is not directly related to the profile, still try to give a helpful response based on your background.',
        },
        {
          role: 'user',
          content: `Based on the following information, answer the question:\n\n${context}\n\nQuestion: ${question}`,
        },
      ],
    })
    return message.choices[0].message.content || ''
  } catch (error) {
    console.error('Error generating response:', error)
    throw error
  }
}

// Create and export MCP server instance
export function createDigitalTwinServer() {
  const server = new Server(
    {
      name: 'digital-twin-mcp',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    }
  )

  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: 'ask_digital_twin',
          description:
            "Ask questions about Jhon Danver's professional background, skills, projects, and experience. The AI will provide answers based on his profile information.",
          inputSchema: {
            type: 'object' as const,
            properties: {
              question: {
                type: 'string',
                description:
                  "Your question about the digital twin's background, skills, or experience",
              },
            },
            required: ['question'],
          },
        },
        {
          name: 'get_profile_summary',
          description:
            "Get a summary of the digital twin's personal information and key details",
          inputSchema: {
            type: 'object' as const,
            properties: {},
          },
        },
      ],
    }
  })

  // Tool handler
  server.setRequestHandler(CallToolRequestSchema, async (req: any) => {
    const { name, input } = req
    if (name === 'ask_digital_twin') {
      try {
        const searchResults = searchProfile(input.question)
        const context = searchResults.map((r) => `${r.title}: ${r.content}`).join('\n\n')
        const response = await generateResponse(input.question, context)
        // Format output with sources
        const sources = searchResults
          .map(
            (r) =>
              `- ${r.title} (relevance: ${(r.score / Math.max(...searchResults.map(x => x.score), 1) * 100).toFixed(0)}%)`
          )
          .join('\n')
        const fullResponse = `${response}\n\n**Sources:**\n${sources}`
        return {
          content: [
            {
              type: 'text',
              text: fullResponse,
            },
          ],
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
          ],
          isError: true,
        }
      }
    }
    if (name === 'get_profile_summary') {
      try {
        const data = loadProfileData()
        const personal = data.personal
        const summary = `\n**Digital Twin Profile Summary**\n\n**Name:** ${personal.name}\n**Title:** ${personal.title}\n**Location:** ${personal.location}\n**Email:** ${personal.contact?.email}\n**LinkedIn:** ${personal.contact?.linkedin}\n**GitHub:** ${personal.contact?.github}\n\nThis digital twin can answer questions about:\n- Professional background and experience\n- Technical skills and certifications\n- Education and coursework\n- Projects and portfolio work\n- Career goals and interests\n- Interview preparation insights\n`
        return {
          content: [
            {
              type: 'text',
              text: summary,
            },
          ],
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
          ],
          isError: true,
        }
      }
    }
    return {
      content: [
        {
          type: 'text',
          text: `Unknown tool: ${name}`,
        },
      ],
      isError: true,
    }
  })

  return server
}
