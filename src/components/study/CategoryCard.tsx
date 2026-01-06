type CategoryCardProps = {
  name: string;
  icon: string;
  books: string[];
  index: number;
};

export function CategoryCard({ name, icon, books, index }: CategoryCardProps) {
  return (
    <div
      className="card p-6 animate-fade-in"
      style={{
        animationDelay: `${index * 50}ms`,
        opacity: 0,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="ml-auto text-sm text-(--color-text-secondary) bg-(--color-background) px-2 py-1 rounded-full">
          {books.length}
        </span>
      </div>
      <ul className="space-y-2">
        {books.map((book) => (
          <li
            key={book}
            className="text-sm text-(--color-text-secondary) flex items-baseline gap-2"
          >
            <span className="text-(--color-accent)">•</span>
            <span>{book}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
