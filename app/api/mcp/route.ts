import { NextRequest, NextResponse } from 'next/server';
import { createDigitalTwinServer } from '@/mcp/mcp-server';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';

// MCP JSON-RPC 2.0 handler using the new MCP server
const server = createDigitalTwinServer();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('MCP Request:', body);
    
    // Handle JSON-RPC method calls
    if (body.method === 'tools/list') {
      const tools = await server.request({ method: 'tools/list' }, ListToolsRequestSchema);
      return NextResponse.json({
        jsonrpc: '2.0',
        id: body.id,
        result: tools,
      });
    } else if (body.method === 'tools/call') {
      const result = await server.request(body, CallToolRequestSchema);
      return NextResponse.json({
        jsonrpc: '2.0',
        id: body.id,
        result,
      });
    }
    
    return NextResponse.json({
      jsonrpc: '2.0',
      id: body.id,
      error: { code: -32601, message: 'Method not found' },
    });
  } catch (e) {
    console.error('MCP Error:', e);
    return NextResponse.json({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: `Parse error: ${e instanceof Error ? e.message : 'Unknown error'}` },
    });
  }
}
