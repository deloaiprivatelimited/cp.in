import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Github,
  Radar,
  Wand2,
  MessageSquare,
  Megaphone,
  Rocket,
  LayoutGrid,
} from "lucide-react";
import AIReadiness from "./sections/AiReadiness";
import Overview from "./sections/Overview";
import AptitudeDSA from "./sections/AptitudeDSA";
import DevelopmentReadiness from "./sections/DevelopmentReadiness";
import SkillStack from "./sections/SkillStack";
import LinkedInEngine from "./sections/LinkedInEngine";
import GitHubFactory from "./sections/GitHubFactory";
import InternshipRadar from "./sections/InternshipRadar";
import ProjectPolishing from "./sections/ProjectPolishing";
import InterviewDrills from "./sections/InterviewDrills";
import SignalBoost from "./sections/SignalBoost";
import FinalSprint from "./sections/FinalSprint";
import ResumeEngine from "./sections/ResumeEngine";

const TABS = [
  { key: "overview", label: "Overview", icon: LayoutGrid, component: Overview },
    { key: "aptitude-dsa", label: "Aptitude & DSA", icon: Briefcase, component: AptitudeDSA },
  { key: "ai-readiness", label: "AI Readiness", icon: Wand2, component: AIReadiness },
  { key: "development-readiness", label: "Development Readiness", icon: Briefcase, component: DevelopmentReadiness},
  { key: "linkedin-engine", label: "LinkedIn Engine", icon: Megaphone, component: LinkedInEngine },
  { key: "github-factory", label: "GitHub Factory", icon: Github, component: GitHubFactory },
  { key: "internship-radar", label: "Internship Radar", icon: Radar, component: InternshipRadar },
  { key: "project-polishing", label: "Project Polishing", icon: Wand2, component: ProjectPolishing },
  { key: "resume-engine", label: "Resume Engine", icon: MessageSquare, component: ResumeEngine },
  { key: "final-sprint", label: "Final Sprint", icon: Rocket, component: FinalSprint },
];

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    rotateX: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    rotateX: 10,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

export default function CareerPrepWithSidebar() {
  const [active, setActive] = React.useState("overview");

  const activeIndex = TABS.findIndex((tab) => tab.key === active);
  const isWhiteBackground =true;
  const ActiveComponent = TABS[activeIndex].component;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={ "black"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`fixed inset-0 -z-10 transition-colors duration-1000 ${
            isWhiteBackground
              ? "bg-gradient-to-b from-slate-50 via-white to-slate-100"
              : "bg-gradient-to-b from-slate-950 via-slate-900 to-black"
          }`}
        />
      </AnimatePresence>

      {!isWhiteBackground && (
        <>
          <div
            className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="fixed -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-[#77dd77] -z-10" />
        </>
      )}

      {isWhiteBackground && (
        <>
          <div
            className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="fixed -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[#77dd77] -z-10" />
        </>
      )}

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
        <MobileTabs active={active} setActive={setActive} isWhiteBackground={isWhiteBackground} />

        <div className="mt-4 grid gap-6 md:grid-cols-[1fr,260px]">
          <main className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
              >
                <ActiveComponent isWhiteBackground={isWhiteBackground} />
              </motion.div>
            </AnimatePresence>
          </main>

          <Sidebar active={active} setActive={setActive} isWhiteBackground={isWhiteBackground} />
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  active,
  setActive,
  isWhiteBackground,
}: {
  active: string;
  setActive: (key: string) => void;
  isWhiteBackground: boolean;
}) {
  return (
    <aside className="hidden md:block fixed right-6 top-18 w-[260px]">
      <div
        className={`rounded-2xl border p-2 backdrop-blur transition-all duration-700 ${
          isWhiteBackground
            ? "border-slate-200 bg-white/80 shadow-lg"
            : "border-white/10 bg-black/50 supports-[backdrop-filter]:bg-black/40"
        }`}
      >
        <nav aria-label="CareerPrep Navigation">
          <ul className="space-y-1">
            {TABS.map(({ key, label, icon: Icon }) => {
              const selected = active === key;
              return (
                <li key={key}>
                  <button
                    onClick={() => setActive(key)}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 outline-none transition-all duration-200 ${
                      isWhiteBackground ? "hover:bg-slate-100" : "hover:bg-white/5"
                    }`}
                  >
                    {selected && (
                      <>
                        <motion.span
                          layoutId="active-rail"
                          className={`absolute inset-0 rounded-xl ${
                            isWhiteBackground ? "bg-slate-100" : "bg-white/10"
                          }`}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        <motion.span
                          layoutId="accent-bar"
                          className="absolute right-0 top-0 h-full w-1 rounded-r-xl bg-[#77dd77]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      </>
                    )}
                    <span className="relative flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 transition-colors ${
                          selected
                            ? "text-[#77dd77]"
                            : isWhiteBackground
                              ? "text-slate-600"
                              : "text-slate-300"
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`text-sm font-medium transition-colors ${
                          selected
                            ? isWhiteBackground ? "text-slate-900" : "text-slate-100"
                            : isWhiteBackground
                              ? "text-slate-600"
                              : "text-slate-300/90"
                        }`}
                      >
                        {label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function MobileTabs({
  active,
  setActive,
  isWhiteBackground,
}: {
  active: string;
  setActive: (key: string) => void;
  isWhiteBackground: boolean;
}) {
  return (
    <div className="md:hidden">
      <div
        className={`rounded-2xl border p-2 backdrop-blur transition-all duration-700 ${
          isWhiteBackground
            ? "border-slate-200 bg-white/80 shadow-lg"
            : "border-white/10 bg-black/50 supports-[backdrop-filter]:bg-black/40"
        }`}
      >
        <ul className="flex gap-2 overflow-x-auto no-scrollbar">
          {TABS.map(({ key, label, icon: Icon }) => {
            const selected = active === key;
            return (
              <li key={key} className="shrink-0">
                <button
                  onClick={() => setActive(key)}
                  className="group relative flex items-center gap-2 rounded-xl px-3 py-2"
                >
                  {selected && (
                    <motion.span
                      layoutId="mobile-pill"
                      className={`absolute inset-0 rounded-xl ${
                        isWhiteBackground ? "bg-slate-100" : "bg-white/10"
                      }`}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        selected
                          ? "text-[#77dd77]"
                          : isWhiteBackground
                            ? "text-slate-600"
                            : "text-slate-300"
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`text-[12px] font-medium tracking-wide transition-colors ${
                        selected
                          ? isWhiteBackground ? "text-slate-900" : "text-slate-100"
                          : isWhiteBackground
                            ? "text-slate-600"
                            : "text-slate-300/80"
                      }`}
                    >
                      {label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
