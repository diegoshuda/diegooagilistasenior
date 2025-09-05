import HeroSection from "@/components/HeroSection";
import MetricsOverview from "@/components/MetricsOverview";
import BurndownChart from "@/components/BurndownChart";
import UserStoriesSection from "@/components/UserStoriesSection";
import ScrumArtifacts from "@/components/ScrumArtifacts";
import UXSection from "@/components/UXSection";
import RoadmapSection from "@/components/RoadmapSection";
import ExperienceSection from "@/components/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(210 40% 98%)' }}>
      <HeroSection />
      <MetricsOverview />
      <BurndownChart />
      <UserStoriesSection />
      <ScrumArtifacts />
      <UXSection />
      <RoadmapSection />
      <ExperienceSection />
    </div>
  );
};

export default Index;