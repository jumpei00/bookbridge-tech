import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/posts/")({
	component: Posts,
});

function Posts() {
	return (
		<main>
			<h2 className="text-center text-2xl mt-8">Blog</h2>
			<ul className="list-none p-0">
				{allPosts.map((post) => {
					return (
						<li key={post._meta.path} className="text-center mt-8">
							<Link
								to="/posts/$path"
								params={{ path: post._meta.path }}
								className="no-underline hover:opacity-70"
							>
								<h3 className="text-lg m-0">{post.title}</h3>
								<span className="text-sm text-gray-600">{post.date}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
