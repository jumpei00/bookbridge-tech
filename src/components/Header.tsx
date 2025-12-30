import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="flex items-center justify-between border-b border-border">
			<h2 className="m-4">BookBridge Tech</h2>
			<nav className="my-4 mr-4">
				<Link to="/" className="no-underline mx-2 hover:opacity-70">
					Home
				</Link>
				<Link to="/profile" className="no-underline mx-2 hover:opacity-70">
					Profile
				</Link>
				<Link to="/posts" className="no-underline mx-2 hover:opacity-70">
					Blog
				</Link>
				<Link to="/study" className="no-underline mx-2 hover:opacity-70">
					Study
				</Link>
			</nav>
		</header>
	);
}
