import { SKILL_CATEGORIES, type SkillCategory } from "@/data/skills";
import { THEMES } from "@/lib/theme";
import { Reveal, Section, SectionHeader } from "@/components/ui/section";

function SkillContent({ category }: { category: SkillCategory }) {
  const theme = THEMES[category.theme];

  switch (category.kind) {
    case "chips":
      return (
        <div className="flex flex-wrap gap-2">
          {category.items.map((item) => (
            <span key={item} className={`px-3 py-1 rounded-full text-xs font-medium ${theme.chip}`}>
              {item}
            </span>
          ))}
        </div>
      );
    case "levels":
      return (
        <div className="flex flex-wrap gap-2">
          {category.items.map(({ name, level }) => (
            <div
              key={name}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${theme.chip}`}
            >
              <span>{name}</span>
              <span>•</span>
              <span className={theme.chipMuted}>{level}</span>
            </div>
          ))}
        </div>
      );
    case "groups":
      return (
        <div className="space-y-2">
          {category.groups.map(({ label, items }) => (
            <div key={label} className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-gray-500">{label}</span>
              {items.map((item) => (
                <span key={item} className={`px-2 py-1 rounded text-xs ${theme.chip}`}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      );
  }
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Skills & Expertise"
          description="An overview of my technical skills, tools, and areas of expertise in technology and development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const theme = THEMES[category.theme];
            const Icon = category.icon;

            return (
              <Reveal
                key={category.title}
                delayMs={(index + 1) * 100}
                className={`${theme.surface} rounded-xl p-6 shadow-lg hover:shadow-xl duration-700 transform hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${theme.iconBadge} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <SkillContent category={category} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
