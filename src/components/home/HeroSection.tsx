export function HeroSection() {
  return (
    <section className="section py-20">
      <div className="container text-center">
        {/* プロフィール画像 */}
        <div className="animate-scale-in">
          <img
            src="/profile/gopher.me.png"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>

        {/* 名前とタイトル */}
        <div className="mt-6 animate-fade-in delay-100">
          <h1 className="text-3xl font-semibold text-(--color-text-primary)">
            Jumpei Motohashi
          </h1>
          <p className="mt-2 text-lg text-(--color-text-secondary)">
            Backend Engineer
          </p>
        </div>

        {/* スキルタグ */}
        <div className="mt-4 flex justify-center gap-2 flex-wrap animate-fade-in delay-200">
          <span className="px-3 py-1 text-sm bg-(--color-accent-light) text-(--color-accent) rounded-full">
            Go
          </span>
          <span className="px-3 py-1 text-sm bg-(--color-accent-light) text-(--color-accent) rounded-full">
            Google Cloud
          </span>
          <span className="px-3 py-1 text-sm bg-(--color-accent-light) text-(--color-accent) rounded-full">
            React
          </span>
          <span className="px-3 py-1 text-sm bg-(--color-accent-light) text-(--color-accent) rounded-full">
            TypeScript
          </span>
        </div>

        {/* 自己紹介 */}
        <p className="mt-6 max-w-xl mx-auto text-(--color-text-secondary) leading-relaxed animate-fade-in delay-300">
          GoとGoogle Cloudが好きなエンジニアです。
          <br />
          BtoB領域でバックエンドエンジニアとして働いています。
        </p>

        {/* ソーシャルリンク */}
        <div className="mt-8 flex justify-center gap-4 animate-fade-in delay-400">
          <SocialLink
            href="https://twitter.com/jumpei_00"
            icon="/icons/x.png"
            label="X"
          />
          <SocialLink
            href="https://www.linkedin.com/in/%E8%AB%84%E5%B9%B3-%E6%9C%AC%E6%A9%8B-a2249a200/"
            icon="/icons/linkedin.png"
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/jumpei00"
            icon="/icons/github.png"
            label="GitHub"
          />
          <SocialLink
            href="https://zenn.dev/jumpei00"
            icon="/icons/zenn.png"
            label="Zenn"
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="social-icon"
      aria-label={label}
    >
      <img src={icon} alt={label} className="w-6 h-6" />
    </a>
  );
}
