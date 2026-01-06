import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { BackLink, PostNotFound } from "@/components/posts";

export const Route = createFileRoute("/posts/$path/")({
  component: Post,
});

function Post() {
  const { path } = Route.useParams();
  const post = allPosts.find((post) => post._meta.path === path);

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <main className="section py-16">
      <div className="container-narrow">
        <BackLink to="/posts" label="記事一覧に戻る" />

        <article className="animate-fade-in">
          <header className="mb-8 pb-8 border-b border-(--color-border)">
            <h1 className="text-3xl font-semibold text-(--color-text-primary)">
              {post.title}
            </h1>
            <time className="mt-4 text-(--color-text-secondary) block">
              {post.date}
            </time>
          </header>

          <div
            className="prose"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: 信頼できるMarkdownソースからの変換
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </main>
  );
}
