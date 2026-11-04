import Image from "next/image";
import { Github } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { THEMES } from "@/lib/theme";
import { Reveal, Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Projects"
          description="A portfolio of functional systems I have designed, developed, and successfully deployed throughout my career."
        />

        <Reveal variant="fade" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 duration-1000">
          {PROJECTS.map(({ title, description, image, tags, repoUrl, theme: themeName }) => {
            const theme = THEMES[themeName];

            return (
              <div
                key={title}
                className={`${theme.surface} ${theme.hoverBorder} rounded-xl overflow-hidden hover:shadow-lg transition transform hover:scale-105 group shadow-lg`}
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${theme.imageOverlay} to-transparent opacity-80 group-hover:opacity-60 transition duration-300`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {tags.map((tag) => (
                      <Tag key={tag} className={theme.chip}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm ${theme.link}`}
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
