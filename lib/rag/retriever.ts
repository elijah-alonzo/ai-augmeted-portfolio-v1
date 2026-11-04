import { Index } from "@upstash/vector";
import { requireEnv } from "@/lib/env";

type ChunkMetadata = {
  title?: string;
  content?: string;
};

const TOP_K = 3;

let index: Index<ChunkMetadata> | undefined;

function getIndex(): Index<ChunkMetadata> {
  index ??= new Index<ChunkMetadata>({
    url: requireEnv("UPSTASH_VECTOR_REST_URL"),
    token: requireEnv("UPSTASH_VECTOR_REST_TOKEN"),
  });
  return index;
}

/** Returns the profile passages most relevant to the question, formatted as prompt context. */
export async function retrieveContext(question: string): Promise<string> {
  const matches = await getIndex().query({
    data: question,
    topK: TOP_K,
    includeMetadata: true,
  });

  if (matches.length === 0) {
    return "No relevant information was found in the digital twin profile.";
  }

  return matches
    .map(({ metadata }) => `${metadata?.title ?? ""}: ${metadata?.content ?? ""}`)
    .join("\n\n");
}
