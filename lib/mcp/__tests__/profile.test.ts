import { describe, expect, it } from "vitest";
import { profile, searchProfile } from "../profile";

describe("searchProfile", () => {
  it("returns at most three results, best match first", () => {
    const results = searchProfile("skills");

    expect(results.length).toBeLessThanOrEqual(3);
    expect(results).toEqual([...results].sort((a, b) => b.score - a.score));
  });

  it("ranks a chunk whose title matches the query highest", () => {
    const { title } = profile.content_chunks[0];

    expect(searchProfile(title)[0].title).toBe(title);
  });

  it("treats regex metacharacters in the query as plain text", () => {
    expect(() => searchProfile("c++ (node.js) [")).not.toThrow();
  });

  it("scores nothing for an empty query", () => {
    expect(searchProfile("").every((result) => result.score === 0)).toBe(true);
  });
});
