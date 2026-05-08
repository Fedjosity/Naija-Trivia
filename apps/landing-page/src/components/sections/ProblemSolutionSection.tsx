"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupsIcon from "@mui/icons-material/Groups";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { icon: <TrendingDownIcon sx={{ fontSize: 28 }} />, text: "Cultural knowledge among young Nigerians is declining rapidly" },
  { icon: <HistoryEduIcon sx={{ fontSize: 28 }} />, text: "Nigerian history education is often perceived as boring" },
  { icon: <PublicOffIcon sx={{ fontSize: 28 }} />, text: "Diaspora children lack accessible tools to learn about their heritage" },
];

const solutions = [
  { icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />, text: "Learn through fun, competitive daily trivia challenges" },
  { icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />, text: "AI-powered content keeps quizzes fresh and culturally rich" },
  { icon: <GroupsIcon sx={{ fontSize: 28 }} />, text: "Compete with Nigerians worldwide on live leaderboards" },
];

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const leftItems = sectionRef.current.querySelectorAll(".problem-item");
    const rightItems = sectionRef.current.querySelectorAll(".solution-item");
    const divider = sectionRef.current.querySelector(".divider-line");

    gsap.fromTo(leftItems, { x: -60, opacity: 0 }, {
      x: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%", end: "top 25%", scrub: 1 },
    });

    gsap.fromTo(rightItems, { x: 60, opacity: 0 }, {
      x: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "top 20%", scrub: 1 },
    });

    if (divider) {
      gsap.fromTo(divider, { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "top 20%", scrub: 1 },
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-20 md:py-24 px-6 overflow-hidden scroll-mt-24">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-naija-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Why Naija Trivia?"
          title="The Problem We're Solving"
          subtitle="Nigerian culture is rich. But without engaging tools, that knowledge fades. We're changing that."
        />

        <div className="mt-20 grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400/80 mb-8">The Problem</h3>
            {problems.map((item, i) => (
              <div key={i} className="problem-item flex items-start gap-4 p-5 rounded-2xl bg-red-500/[0.04] border border-red-500/10 hover:border-red-500/20 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400/70">
                  {item.icon}
                </div>
                <p className="text-text-secondary leading-relaxed pt-2">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center py-8">
            <div className="divider-line w-px h-full bg-gradient-to-b from-red-500/30 via-naija-gold/50 to-naija-green/30 origin-top" />
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-naija-green-light mb-8">The Solution</h3>
            {solutions.map((item, i) => (
              <div key={i} className="solution-item flex items-start gap-4 p-5 rounded-2xl bg-naija-green/[0.04] border border-naija-green/10 hover:border-naija-green/20 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-naija-green/10 flex items-center justify-center text-naija-green-light">
                  {item.icon}
                </div>
                <p className="text-text-secondary leading-relaxed pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
