import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="section py-20">
      <div className="container text-center">
        <div className="animate-scale-in">
          <div className="text-8xl mb-6">🔍</div>
        </div>

        <h1 className="text-4xl font-semibold text-(--color-text-primary) animate-fade-in delay-100">
          404
        </h1>
        <p className="mt-2 text-xl text-(--color-text-secondary) animate-fade-in delay-200">
          Page Not Found
        </p>

        <p className="mt-6 text-(--color-text-secondary) max-w-md mx-auto animate-fade-in delay-300">
          お探しのページは見つかりませんでした。
          <br />
          URLが正しいかご確認ください。
        </p>

        <div className="mt-8 flex justify-center gap-4 animate-fade-in delay-400">
          <Link to="/" className="btn btn-primary">
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
