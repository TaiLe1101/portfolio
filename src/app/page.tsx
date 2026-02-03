import { Experience } from "@/app/components/experience/experience";
import { Hero } from "@/app/components/hero/hero";
import { BackgroundMode } from "@/app/components/projects/components/background-mode/background-mode";
import { Projects } from "@/app/components/projects/projects";
import { SkillsMarquee } from "@/components/skills-marquee/skills-marquee";
import { MainLayout } from "@/layouts/main-layout/main-layout";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <SkillsMarquee />
      <BackgroundMode>
        <Experience />
        <Projects />
      </BackgroundMode>
    </MainLayout>
  );
}
