type CareerSectionProps = {
  careers: Array<{ period: string; title: string; description: string }>;
};

export function CareerSection({ careers }: CareerSectionProps) {
  return (
    <section className="section py-16 bg-white">
      <div className="container-narrow">
        <h2 className="section-title">Career & Education</h2>
        <div className="timeline animate-fade-in delay-100">
          {careers.map((career) => (
            <div key={career.period} className="timeline-item">
              <span className="text-sm font-medium text-(--color-accent)">
                {career.period}
              </span>
              <h3 className="text-lg font-semibold mt-1">{career.title}</h3>
              <p className="text-(--color-text-secondary) mt-1 text-sm">
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
