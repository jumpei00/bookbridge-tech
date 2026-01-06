type CertificationsSectionProps = {
  certifications: Array<{ period: string; name: string; url: string }>;
};

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section className="section py-16">
      <div className="container-narrow">
        <h2 className="section-title">Certifications</h2>
        <div className="grid gap-4 animate-fade-in delay-100">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener"
              className="card p-6 flex items-center gap-4 no-underline"
            >
              <div className="w-12 h-12 bg-(--color-accent-light) rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-(--color-accent)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-(--color-text-primary)">
                  {cert.name}
                </h3>
                <p className="text-sm text-(--color-text-secondary)">
                  {cert.period}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-(--color-text-secondary)"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
