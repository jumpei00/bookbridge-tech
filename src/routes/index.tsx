import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			{/* タイトルセクション */}
			<div className="text-center">
				<h1 className="text-2xl mt-8">Welcome to my page!!</h1>
				<h3 className="text-lg">This site is running on Cloudflare Pages.</h3>
				<h3 className="text-lg">
					This page repository →{" "}
					<a
						href="https://github.com/jumpei00/bookbridge"
						target="_blank"
						rel="noopener"
						className="text-blue-600 hover:underline"
					>
						here!!
					</a>
				</h3>
			</div>

			{/* SNSセクション */}
			<div className="text-center mt-9">
				<div className="mb-3">SNS</div>
				<a
					href="https://twitter.com/jumpei_00"
					target="_blank"
					rel="noopener"
					className="inline-block"
				>
					<img src="/icons/x.png" alt="X" className="w-[30px] mr-2.5" />
				</a>
				<a
					href="https://www.linkedin.com/in/%E8%AB%84%E5%B9%B3-%E6%9C%AC%E6%A9%8B-a2249a200/"
					target="_blank"
					rel="noopener"
					className="inline-block"
				>
					<img src="/icons/linkedin.png" alt="Linkedin" className="w-10 ml-2.5" />
				</a>
			</div>

			{/* GitHubセクション */}
			<div className="text-center mt-9">
				<div className="mb-3">GitHub</div>
				<a
					href="https://github.com/jumpei00"
					target="_blank"
					rel="noopener"
					className="inline-block"
				>
					<img src="/icons/github.png" alt="GitHub" className="w-[50px]" />
				</a>
			</div>

			{/* Articleセクション */}
			<div className="text-center mt-9">
				<div className="mb-3">Article</div>
				<a
					href="https://zenn.dev/jumpei00"
					target="_blank"
					rel="noopener"
					className="inline-block"
				>
					<img src="/icons/zenn.png" alt="Zenn" className="w-[120px]" />
				</a>
			</div>
		</main>
	);
}
