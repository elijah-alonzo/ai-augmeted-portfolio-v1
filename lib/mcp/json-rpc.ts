import { callTool, TOOL_DEFINITIONS } from "./tools";

const PROTOCOL_VERSION = "2025-03-26";
const SERVER_INFO = { name: "digital-twin-mcp", version: "1.0.0" };

const ERROR_CODES = {
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
} as const;

type RequestId = string | number | null;

export interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: RequestId;
  method: string;
  params?: Record<string, unknown>;
}

export type JsonRpcResponse =
  | { jsonrpc: "2.0"; id: RequestId; result: unknown }
  | { jsonrpc: "2.0"; id: RequestId; error: { code: number; message: string } };

function success(id: RequestId, result: unknown): JsonRpcResponse {
  return { jsonrpc: "2.0", id, result };
}

function failure(id: RequestId, code: number, message: string): JsonRpcResponse {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function isJsonRpcRequest(value: unknown): value is JsonRpcRequest {
  return typeof value === "object" && value !== null && typeof (value as JsonRpcRequest).method === "string";
}

/**
 * Handles one stateless MCP JSON-RPC message.
 * Returns `null` for notifications, which must not receive a response.
 */
export async function handleMessage(message: unknown): Promise<JsonRpcResponse | null> {
  if (!isJsonRpcRequest(message)) {
    return failure(null, ERROR_CODES.invalidRequest, "Invalid JSON-RPC request");
  }

  const { id, method, params } = message;
  const isNotification = id === undefined;
  if (isNotification) return null;

  switch (method) {
    case "initialize":
      return success(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO,
      });
    case "ping":
      return success(id, {});
    case "tools/list":
      return success(id, { tools: TOOL_DEFINITIONS });
    case "tools/call": {
      const name = params?.name;
      if (typeof name !== "string") {
        return failure(id, ERROR_CODES.invalidParams, "`name` is required");
      }
      const args = (params?.arguments ?? {}) as Record<string, unknown>;
      return success(id, await callTool(name, args));
    }
    default:
      return failure(id, ERROR_CODES.methodNotFound, "Method not found");
  }
}
