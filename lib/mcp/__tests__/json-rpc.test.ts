import { describe, expect, it } from "vitest";
import { handleMessage } from "../json-rpc";

const request = (method: string, params?: Record<string, unknown>) => ({
  jsonrpc: "2.0" as const,
  id: 1,
  method,
  params,
});

describe("handleMessage", () => {
  it("answers initialize with server info and tool capability", async () => {
    const response = await handleMessage(request("initialize"));

    expect(response).toMatchObject({
      id: 1,
      result: { serverInfo: { name: "digital-twin-mcp" }, capabilities: { tools: {} } },
    });
  });

  it("lists both tools", async () => {
    const response = await handleMessage(request("tools/list"));
    const tools = (response as { result: { tools: { name: string }[] } }).result.tools;

    expect(tools.map((tool) => tool.name)).toEqual(["ask_digital_twin", "get_profile_summary"]);
  });

  it("returns the profile summary without calling an LLM", async () => {
    const response = await handleMessage(request("tools/call", { name: "get_profile_summary" }));

    expect(JSON.stringify(response)).toContain("Digital Twin Profile Summary");
  });

  it("flags unknown tools as errors", async () => {
    const response = await handleMessage(request("tools/call", { name: "nope" }));

    expect(response).toMatchObject({ result: { isError: true } });
  });

  it("rejects an empty question before reaching the LLM", async () => {
    const response = await handleMessage(
      request("tools/call", { name: "ask_digital_twin", arguments: { question: "  " } }),
    );

    expect(response).toMatchObject({ result: { isError: true } });
  });

  it("returns method-not-found for unknown methods", async () => {
    expect(await handleMessage(request("bogus"))).toMatchObject({ error: { code: -32601 } });
  });

  it("does not respond to notifications", async () => {
    expect(await handleMessage({ jsonrpc: "2.0", method: "notifications/initialized" })).toBeNull();
  });

  it("rejects malformed input", async () => {
    expect(await handleMessage("nope")).toMatchObject({ error: { code: -32600 } });
  });
});
