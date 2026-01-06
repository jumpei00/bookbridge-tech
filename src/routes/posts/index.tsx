import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { PostCard } from "@/components/posts";

export const Route = createFileRoute("/posts/")({
  component: Posts,
});

function Posts() {
  return (
    <main className="section py-16">
      <div className="container-narrow">
        <h1 className="section-title">Blog</h1>
        <p className="text-center text-(--color-text-secondary) mb-12 animate-fade-in">
          技術記事や日々の学びを発信しています
        </p>

        <div className="grid gap-4">
          {allPosts.map((post, index) => (
            <PostCard
              key={post._meta.path}
              path={post._meta.path}
              title={post.title}
              date={post.date}
              index={index}
            />
          ))}
        </div>

        {allPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-(--color-text-secondary)">
              まだ記事がありません
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
