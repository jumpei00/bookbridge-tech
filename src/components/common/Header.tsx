import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-(--color-border)">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="no-underline">
          <h1 className="text-xl font-semibold tracking-tight text-(--color-text-primary) hover:text-(--color-accent) transition-colors">
            BookBridge Tech
          </h1>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/study">Study</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm font-medium text-(--color-text-secondary) no-underline rounded-lg hover:text-(--color-accent) hover:bg-(--color-accent-light) transition-all duration-200"
    >
      {children}
    </Link>
  );
}
