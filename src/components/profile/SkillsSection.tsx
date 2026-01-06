type SkillsSectionProps = {
  skills: Array<{ name: string; years: string; level: number }>;
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="section py-16">
      <div className="container-narrow">
        <h2 className="section-title">Skills</h2>
        <div className="space-y-6 animate-fade-in delay-100">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              years={skill.years}
              level={skill.level}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  years,
  level,
  delay,
}: {
  name: string;
  years: string;
  level: number;
  delay: number;
}) {
  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-(--color-text-secondary)">{years}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
