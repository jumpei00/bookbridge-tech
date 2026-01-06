import { createFileRoute } from "@tanstack/react-router";
import { HeroSection, RepositorySection } from "@/components/home";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <HeroSection />
      <RepositorySection />
    </main>
  );
}
