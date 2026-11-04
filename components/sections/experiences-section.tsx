import { HARD_SKILLS_EXPERIENCE, SOFT_SKILLS_EXPERIENCE, type ExperienceGroup } from "@/data/experiences";
import { Reveal, Section, SectionHeader } from "@/components/ui/section";

interface ExperienceCardProps {
  group: ExperienceGroup;
  variant: "left" | "right";
  headingClass: string;
  borderClass: string;
  cardClass: string;
}

function ExperienceCard({ group, variant, headingClass, borderClass, cardClass }: ExperienceCardProps) {
  return (
    <Reveal
      variant={variant}
      className={`bg-white/80 backdrop-blur border rounded-xl p-8 shadow-lg hover:shadow-xl duration-1000 ${cardClass}`}
    >
      <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>{group.title}</h3>
      <div className="space-y-4">
        {group.entries.map(({ role, context }) => (
          <div key={`${role}-${context}`} className={`border-l-4 pl-4 ${borderClass}`}>
            <h4 className="text-gray-900 font-semibold mb-1">{role}</h4>
            <p className="text-gray-600 text-sm">{context}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function ExperiencesSection() {
  return (
    <Section id="experiences">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Experiences"
          description="A collection of roles, projects, and leadership work that highlight my technical abilities and the soft skills that support them—ranging from hands-on development to collaboration, problem-solving, and project execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceCard
            group={HARD_SKILLS_EXPERIENCE}
            variant="left"
            cardClass="border-blue-200"
            headingClass="text-blue-600"
            borderClass="border-blue-500"
          />
          <ExperienceCard
            group={SOFT_SKILLS_EXPERIENCE}
            variant="right"
            cardClass="border-indigo-200 delay-200"
            headingClass="text-indigo-600"
            borderClass="border-indigo-500"
          />
        </div>
      </div>
    </Section>
  );
}
