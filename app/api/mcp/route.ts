import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// MCP JSON-RPC 2.0 handler with getProjects method
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.method === 'ping') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id: body.id,
        result: 'pong',
      });
    }
    if (body.method === 'getProjects') {
      // Read digitaltwin.json from the workspace root
      const filePath = path.resolve(process.cwd(), '../../digitaltwin.json');
      const file = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(file);
      const projects = data.projects_portfolio || [];
      return NextResponse.json({
        jsonrpc: '2.0',
        id: body.id,
        result: projects,
      });
    }
    // Add more MCP methods here as needed
    return NextResponse.json({
      jsonrpc: '2.0',
      id: body.id,
      error: { code: -32601, message: 'Method not found' },
    });
  } catch (e) {
    return NextResponse.json({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: 'Parse error' },
    });
  }
}
