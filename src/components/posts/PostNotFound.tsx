import { Link } from "@tanstack/react-router";

export function PostNotFound() {
  return (
    <main className="section py-16">
      <div className="container-narrow text-center">
        <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
        <p className="text-(--color-text-secondary) mb-6">
          お探しの記事が見つかりませんでした
        </p>
        <Link to="/posts" className="btn btn-primary">
          記事一覧に戻る
        </Link>
      </div>
    </main>
  );
}

