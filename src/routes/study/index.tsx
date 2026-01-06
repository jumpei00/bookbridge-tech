import { createFileRoute } from "@tanstack/react-router";
import { allBooks } from "content-collections";
import { CategoryCard } from "@/components/study";

export const Route = createFileRoute("/study/")({
  component: Study,
});

function Study() {
  const booksData = allBooks[0];

  // 合計冊数を計算
  const totalBooks = booksData.categories.reduce(
    (acc, cat) => acc + cat.books.length,
    0,
  );

  return (
    <main className="section py-16">
      <div className="container">
        <h1 className="section-title">{booksData.title}</h1>
        <p className="text-center text-(--color-text-secondary) mb-12 animate-fade-in">
          {booksData.description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.categories.map((category, index) => (
            <CategoryCard key={category.name} {...category} index={index} />
          ))}
        </div>

        {/* 合計冊数 */}
        <div className="mt-12 text-center animate-fade-in delay-500">
          <p className="text-(--color-text-secondary)">
            Total:{" "}
            <span className="font-semibold text-(--color-accent)">
              {totalBooks}
            </span>{" "}
            books
          </p>
        </div>
      </div>
    </main>
  );
}
