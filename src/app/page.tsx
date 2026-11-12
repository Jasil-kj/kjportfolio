import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { SelectedWork } from "@/components/SelectedWork";
import { Technology } from "@/components/Technology";
import { EducationAndAchievements } from "@/components/EducationAndAchievements";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8F8F6] text-[#111111]">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <SelectedWork />
      <Technology />
      <EducationAndAchievements />
      <Approach />
      <Contact />
    </main>
  );
}
