import { Link } from "@tanstack/react-router";

type PostCardProps = {
  path: string;
  title: string;
  date: string;
  index: number;
};

export function PostCard({ path, title, date, index }: PostCardProps) {
  return (
    <Link
      to="/posts/$path"
      params={{ path }}
      className="card p-6 no-underline block animate-fade-in"
      style={{
        animationDelay: `${index * 100}ms`,
        opacity: 0,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-(--color-text-primary) group-hover:text-(--color-accent)">
            {title}
          </h2>
          <time className="mt-2 text-sm text-(--color-text-secondary) block">
            {date}
          </time>
        </div>
        <svg
          className="w-5 h-5 text-(--color-text-secondary) shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}

