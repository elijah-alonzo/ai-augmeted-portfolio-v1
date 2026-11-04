/** Browser-side client for the `/api/rag` endpoint. */
export async function askDigitalTwin(question: string): Promise<string> {
  const response = await fetch("/api/rag", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) throw new Error("Failed to get response");

  const data: { answer?: string } = await response.json();
  return data.answer || "(No answer)";
}
