import { Link } from "@tanstack/react-router";

export function NotFound() {
	return (
		<div className="text-center mt-12">
			<h1 className="text-3xl mb-4">404 Not Found</h1>
			<p className="mb-6">Sorry, the page you are looking for does not exist.</p>
			<Link to="/" className="text-blue-600 hover:underline">
				Go back to the home page
			</Link>
		</div>
	);
}
