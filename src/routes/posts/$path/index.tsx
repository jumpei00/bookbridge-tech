import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/posts/$path/")({
	component: Post,
});

function Post() {
	const { path } = Route.useParams();
	const post = allPosts.find((post) => post._meta.path === path);
	if (!post) {
		return (
			<div className="text-center mt-12">
				<h1>Post not found</h1>
			</div>
		);
	}
	return (
		<main className="flex flex-col items-center">
			<article className="w-full md:w-2/5 px-4">
				<h2 className="text-2xl text-center">{post.title}</h2>
				<p className="text-center text-gray-600">{post.date}</p>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: 信頼できるMarkdownソースからの変換 */}
				<div
					className="prose whitespace-pre-wrap"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</article>
		</main>
	);
}
