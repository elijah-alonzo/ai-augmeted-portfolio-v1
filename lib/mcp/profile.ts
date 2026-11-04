import profileJson from "@/data/digital-twin.json";
import type { ProfileData } from "@/types/profile";

export const profile: ProfileData = profileJson;

export interface SearchResult {
  title: string;
  content: string;
  score: number;
}

const MAX_RESULTS = 3;
const BODY_MATCH_WEIGHT = 2;
const TITLE_MATCH_WEIGHT = 5;

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Keyword search over the profile's content chunks, best matches first. */
export function searchProfile(question: string): SearchResult[] {
  const keywords = question.toLowerCase().split(/\s+/).filter(Boolean);
  const patterns = keywords.map((keyword) => new RegExp(`\\b${escapeRegExp(keyword)}`, "g"));

  return profile.content_chunks
    .map(({ title, content }) => {
      const text = `${title} ${content}`.toLowerCase();
      const titleLower = title.toLowerCase();

      const bodyScore = patterns.reduce(
        (sum, pattern) => sum + (text.match(pattern)?.length ?? 0) * BODY_MATCH_WEIGHT,
        0,
      );
      const titleScore = keywords.reduce(
        (sum, keyword) => sum + (titleLower.includes(keyword) ? TITLE_MATCH_WEIGHT : 0),
        0,
      );

      return { title, content, score: bodyScore + titleScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);
}
