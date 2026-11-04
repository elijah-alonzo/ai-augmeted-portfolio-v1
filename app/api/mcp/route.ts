import { NextRequest, NextResponse } from "next/server";
import { handleMessage } from "@/lib/mcp/json-rpc";

/** Stateless MCP endpoint (Streamable HTTP transport, JSON responses only). */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => undefined);

  if (body === undefined) {
    return NextResponse.json(
      { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
      { status: 400 },
    );
  }

  const response = await handleMessage(body);

  // Notifications get an empty 202 acknowledgement.
  if (response === null) return new NextResponse(null, { status: 202 });

  return NextResponse.json(response);
}

export function GET() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
