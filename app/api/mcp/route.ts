import { NextRequest, NextResponse } from 'next/server';
import { createDigitalTwinServer } from '@/mcp/mcp-server';


// MCP JSON-RPC 2.0 handler using the new MCP server
const server = createDigitalTwinServer();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Use MCP server to handle the request
    const response = await server.handleRequest(body);
    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: 'Parse error' },
    });
  }
}
