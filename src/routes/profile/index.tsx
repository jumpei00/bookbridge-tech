import { createFileRoute } from "@tanstack/react-router";
import { allProfiles } from "content-collections";
import {
  CareerSection,
  CertificationsSection,
  HeroSection,
  SkillsSection,
} from "@/components/profile";

export const Route = createFileRoute("/profile/")({
  component: Profile,
});

function Profile() {
  const profile = allProfiles[0];

  return (
    <main>
      <HeroSection {...profile} />
      <SkillsSection skills={profile.skills} />
      <CareerSection careers={profile.careers} />
      <CertificationsSection certifications={profile.certifications} />
    </main>
  );
}
