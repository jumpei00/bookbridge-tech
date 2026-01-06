type HeroSectionProps = {
  name: string;
  nameJa: string;
  job: string;
  workplace: string;
  workplaceUrl: string;
  location: string;
  birthplace: string;
  bio: string;
};

export function HeroSection({
  name,
  nameJa,
  job,
  workplace,
  workplaceUrl,
  location,
  birthplace,
  bio,
}: HeroSectionProps) {
  return (
    <section className="section py-16 bg-white">
      <div className="container-narrow">
        <div className="text-center animate-scale-in">
          <img
            src="/profile/gopher.me.png"
            alt="Profile"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-xl border-4 border-white"
          />
        </div>

        <div className="text-center mt-6 animate-fade-in delay-100">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-(--color-text-secondary) mt-1">{nameJa}</p>
        </div>

        {/* 基本情報カード */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in delay-200">
          <InfoCard label="Job" value={job} />
          <InfoCard label="Workplace" value={workplace} href={workplaceUrl} />
          <InfoCard label="Location" value={location} />
          <InfoCard label="Birthplace" value={birthplace} />
        </div>

        {/* 自己紹介 */}
        <div className="mt-8 p-6 bg-(--color-background) rounded-xl animate-fade-in delay-300">
          <p className="text-(--color-text-secondary) leading-relaxed">{bio}</p>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="card-flat p-4 text-center">
      <p className="text-xs text-(--color-text-secondary) uppercase tracking-wide">
        {label}
      </p>
      <p className="mt-1 font-medium text-(--color-text-primary)">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}
