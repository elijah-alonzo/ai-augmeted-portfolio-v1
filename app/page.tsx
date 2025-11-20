
"use client";

import { useState } from "react";
// Portfolio data (normally fetched, here hardcoded for demo)
const profile = {
  name: "Elijah Taguinod Alonzo",
  title: "Information Technology Student",
  location: "Pasig City, Philippines",
  summary:
    "An information technology student with a passion for learning and developing skills in software development, networking, and cybersecurity. Eager to contribute to real-world projects and gain hands-on experience in the IT industry.",
  contact: {
    email: "elijahalonzo.me@gmail.com",
    linkedin: "https://linkedin.com/in/elijah-alonzo",
    github: "https://github.com/elicakessss",
  },

  experience: [
    {
      role: "Capstone Project Lead",
      org: "St. Paul University Philippines",
      year: "2024-2025",
      desc: "Led the development of an e-portfolio and ranking system for the student government."
    }
  ],
  projects: [
    {
      name: "AI-Powered Digital Twin Workshop Platform",
      desc: "End-to-end RAG system for interview preparation.",
      tech: ["Python", "Upstash Vector", "Groq API", "Next.js"],
      github: "https://github.com/username/digital-twin",
      demo: "https://mydigitaltwin.vercel.app"
    },
    {
      name: "Paulinian Student Government E-Portfolio and Ranking System",
      desc: "E-portfolio and ranking system for student government members.",
      tech: ["Laravel PHP", "MySQL"],
      github: "https://github.com/username/digital-twin"
    }
  ],
  skills: {
    technical: [
      "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS", "SQL", "Git"
    ],
    soft: [
      "Teamwork", "Communication", "Problem-solving", "Adaptability", "Time Management"
    ]
  }
};


export default function Page() {
  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    setChatHistory(prev => [...prev, { sender: "user", text: question }]);
    setQuestion("");
    try {
      const res = await fetch("/api/rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      if (!res.ok) throw new Error("Failed to get response");
      const data = await res.json();
      setChatHistory(prev => [...prev, { sender: "elijah", text: data.answer || "(No answer)" }]);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-zinc-300 dark:border-zinc-700 shadow-md object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">{profile.name}</h1>
            <div className="text-lg text-zinc-600 dark:text-zinc-300 mb-2">{profile.title} — {profile.location}</div>
            <p className="mb-4 text-zinc-700 dark:text-zinc-200">{profile.summary}</p>
            <div className="flex gap-4 text-sm">
              <a href={`mailto:${profile.contact.email}`} className="hover:underline">Email</a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener" className="hover:underline">LinkedIn</a>
              <a href={profile.contact.github} target="_blank" rel="noopener" className="hover:underline">GitHub</a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="w-full mb-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Experience</h2>
          <ul className="list-disc pl-6">
            {profile.experience.map((exp, i) => (
              <li key={i} className="mb-1">
                <span className="font-bold">{exp.role}</span> at {exp.org} ({exp.year})<br />
                <span className="text-zinc-700 dark:text-zinc-300">{exp.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        {profile.projects && (
          <section className="w-full mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {profile.projects.map((proj, i) => (
                <div key={i} className="p-4 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm">
                  <div className="font-bold text-lg mb-1">{proj.name}</div>
                  <div className="mb-1 text-zinc-700 dark:text-zinc-300">{proj.desc}</div>
                  <div className="mb-1 text-xs text-zinc-500">Tech: {proj.tech.join(", ")}</div>
                  <div className="flex gap-2 text-sm">
                    {proj.github && <a href={proj.github} target="_blank" rel="noopener" className="text-blue-600 hover:underline">GitHub</a>}
                    {proj.demo && <a href={proj.demo} target="_blank" rel="noopener" className="text-green-600 hover:underline">Live Demo</a>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        <section className="w-full mb-8">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-semibold mb-1">Technical Skills</div>
              <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
                {profile.skills.technical.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Soft Skills</div>
              <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
                {profile.skills.soft.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Floating Chat Icon */}
        <button
          className="fixed bottom-8 right-8 z-50 bg-black text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-zinc-800 focus:outline-none"
          onClick={() => setShowChat(true)}
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 4.556 4.694 8.25 10.125 8.25.988 0 1.947-.09 2.857-.26.37-.07.764.02 1.04.27l2.122 1.93a.75.75 0 001.25-.53v-2.21c0-.414.336-.75.75-.75C21.306 17.25 21.75 14.85 21.75 12c0-4.556-4.694-8.25-10.125-8.25S2.25 7.444 2.25 12z" />
          </svg>
        </button>

        {/* Chat Modal */}
        {showChat && (
          <div>
            <div className="fixed inset-0 z-50" style={{background: "transparent"}} onClick={() => setShowChat(false)}></div>
            <div
              className="fixed z-50 w-full max-w-md flex flex-col h-[32rem] bg-white dark:bg-zinc-900 rounded-lg shadow-lg"
              style={{ right: '2rem', bottom: '6.5rem' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                onClick={() => setShowChat(false)}
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-zinc-50 text-center">Chat with Elijah</h3>
              <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2 bg-zinc-50 dark:bg-zinc-800 rounded">
                {chatHistory.length === 0 && (
                  <div className="text-center text-zinc-400 mt-8">Start the conversation!</div>
                )}
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow
                        ${msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-zinc-200 dark:bg-zinc-700 text-black dark:text-zinc-50 rounded-bl-none"}
                      `}
                    >
                      {msg.sender === "elijah" && <span className="font-semibold mr-1">Elijah:</span>}
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow bg-zinc-200 dark:bg-zinc-700 text-black dark:text-zinc-50 rounded-bl-none opacity-70">
                      <span className="font-semibold mr-1">Elijah:</span>Typing...
                    </div>
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2 p-2 border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                <input
                  type="text"
                  className="flex-1 rounded border px-3 py-2 text-black dark:text-zinc-900"
                  placeholder="Type your message..."
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  required
                  autoFocus
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="rounded bg-black text-white px-4 py-2 font-semibold hover:bg-zinc-800 disabled:opacity-50"
                  disabled={loading}
                >
                  Send
                </button>
              </form>
              {error && (
                <div className="mt-2 p-2 rounded bg-red-100 text-red-800 text-sm">{error}</div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
