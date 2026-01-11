export function RepositorySection() {
  return (
    <section className="section bg-white py-16">
      <div className="container text-center">
        <h2 className="section-title">This Site</h2>
        <p className="text-(--color-text-secondary) mb-6 animate-fade-in">
          This site is running on Cloudflare Workers with TanStack Start.
        </p>
        <a
          href="https://github.com/jumpei00/bookbridge-tech"
          target="_blank"
          rel="noopener"
          className="btn btn-outline animate-fade-in delay-100"
        >
          <img src="/icons/github.png" alt="GitHub" className="w-5 h-5 mr-2" />
          View Repository
        </a>
      </div>
    </section>
  );
}
