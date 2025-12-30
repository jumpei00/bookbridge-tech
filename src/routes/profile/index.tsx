import { createFileRoute } from "@tanstack/react-router";
import { allProfiles } from "content-collections";

export const Route = createFileRoute("/profile/")({
	component: Profile,
});

function Profile() {
	const profile = allProfiles[0];

	return (
		<main className="text-center mt-12">
			<div
				className="prose mx-auto"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: 信頼できるMarkdownソースからの変換
				dangerouslySetInnerHTML={{ __html: profile.html }}
			/>
		</main>
	);
}
