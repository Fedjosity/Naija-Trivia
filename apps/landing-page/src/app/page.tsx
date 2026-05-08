import HeroSection from "@/components/sections/HeroSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import FeatureDailyChallenge from "@/components/sections/FeatureDailyChallenge";
import FeatureLeaderboard from "@/components/sections/FeatureLeaderboard";
import FeatureRewards from "@/components/sections/FeatureRewards";
import SocialProofSection from "@/components/sections/SocialProofSection";
import AppExperienceSection from "@/components/sections/AppExperienceSection";
import DownloadCTASection from "@/components/sections/DownloadCTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero — Massive visual impact with phone mockup */}
      <HeroSection />

      {/* 2. Product Showcase — Horizontal scroll through app screens */}
      <ShowcaseSection />

      {/* 3. Problem / Solution — Why this app exists */}
      <ProblemSolutionSection />

      {/* 4a. Feature — Daily Challenge */}
      <FeatureDailyChallenge />

      {/* 4b. Feature — Leaderboards */}
      <FeatureLeaderboard />

      {/* 4c. Feature — Rewards */}
      <FeatureRewards />

      {/* 5. Social Proof — Community & Testimonials */}
      <SocialProofSection />

      {/* 6. App Experience — Pinned screen transitions */}
      <AppExperienceSection />

      {/* 7. Download CTA — Conversion section */}
      <DownloadCTASection />

      {/* 8. Footer */}
      <FooterSection />
    </>
  );
}
