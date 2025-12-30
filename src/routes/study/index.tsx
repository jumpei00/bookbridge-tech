import { createFileRoute } from "@tanstack/react-router";
import { allBooks } from "content-collections";

export const Route = createFileRoute("/study/")({
	component: Books,
});

function Books() {
	const _book = allBooks[0];
	return (
		<main className="text-center">
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: 信頼できるMarkdownソースからの変換 */}
			<div
				className="prose mx-auto"
				dangerouslySetInnerHTML={{ __html: _book.html }}
			/>
		</main>
	);
}
