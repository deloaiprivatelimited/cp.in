import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Briefcase,
  Github,
  Radar,
  Wand2,
  MessageSquare,
  Megaphone,
  Rocket,
} from "lucide-react";

// --- Tab config -------------------------------------------------------------
const TABS = [
  { key: "skill-stack", label: "Skill Stack", icon: Briefcase },
  { key: "linkedin-engine", label: "LinkedIn Engine", icon: Megaphone },
  { key: "github-factory", label: "GitHub Factory", icon: Github },
  { key: "internship-radar", label: "Internship Radar", icon: Radar },
  { key: "project-polishing", label: "Project Polishing", icon: Wand2 },
  { key: "interview-drills", label: "Interview Drills", icon: MessageSquare },
  { key: "signal-boost", label: "Signal Boost", icon: Megaphone },
  { key: "final-sprint", label: "Final Sprint", icon: Rocket },
];

const variants = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

// --- Page with COOL SIDEBAR --------------------------------------------------
export default function CareerPrepWithSidebar() {
  const [active, setActive] = React.useState(TABS[0].key);

  return (
    <section className="relative min-h-dvh overflow-x-clip" aria-label="CareerPrep — Placement Operating System">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-[#77dd77] -z-10" />

      {/* Layout */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
        {/* Mobile top tabs (compact) */}
        <MobileTabs active={active} setActive={setActive} />

        <div className="mt-4 grid gap-6 md:grid-cols-[260px,1fr]">
          {/* Sidebar (desktop) */}
          <Sidebar active={active} setActive={setActive} />

          {/* Main */}
          <main className="min-w-0">
            <HeroHeader />

            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur shadow-2xl"
                  aria-live="polite"
                >
                  {renderTabContent(active)}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

// --- Sidebar -----------------------------------------------------------------
function Sidebar({
  active,
  setActive,
}: {
  active: string;
  setActive: (key: string) => void;
}) {
  return (
    <aside className="hidden md:block">
      <div className="sticky top-6 rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav aria-label="CareerPrep Navigation">
          <ul className="space-y-1" role="tablist">
            {TABS.map(({ key, label, icon: Icon }) => {
              const selected = active === key;
              return (
                <li key={key} role="presentation">
                  <button
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${key}`}
                    id={`tab-${key}`}
                    onClick={() => setActive(key)}
                    className="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 outline-none transition"
                  >
                    {/* Active background rail with shared layout for smooth morph */}
                    <motion.span
                      layoutId="active-rail"
                      className={`absolute inset-0 rounded-xl ${selected ? "bg-white/10" : ""}`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                    {/* Active accent bar on the left */}
                    <motion.span
                      layoutId="accent-bar"
                      className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${selected ? "bg-[#77dd77]" : "bg-transparent"}`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />

                    <span className="relative flex items-center gap-3">
                      <Icon className={`h-4 w-4 ${selected ? "text-[#77dd77]" : "text-slate-300"}`} aria-hidden />
                      <span className={`text-sm font-medium ${selected ? "text-slate-100" : "text-slate-300/90"}`}>{label}</span>
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

// --- Mobile compact top tabs -------------------------------------------------
function MobileTabs({
  active,
  setActive,
}: {
  active: string;
  setActive: (key: string) => void;
}) {
  return (
    <div className="md:hidden">
      <div className="rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <ul className="flex gap-2 overflow-x-auto no-scrollbar" role="tablist">
          {TABS.map(({ key, label, icon: Icon }) => {
            const selected = active === key;
            return (
              <li key={key} role="presentation" className="shrink-0">
                <button
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${key}`}
                  id={`tab-${key}`}
                  onClick={() => setActive(key)}
                  className="group relative flex items-center gap-2 rounded-xl px-3 py-2"
                >
                  <motion.span
                    layoutId="mobile-pill"
                    className={`absolute inset-0 rounded-xl ${selected ? "bg-white/10" : ""}`}
                  />
                  <span className="relative flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${selected ? "text-[#77dd77]" : "text-slate-300"}`} aria-hidden />
                    <span className={`text-[12px] font-medium tracking-wide ${selected ? "text-slate-100" : "text-slate-300/80"}`}>{label}</span>
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

// --- Hero -------------------------------------------------------------------
function HeroHeader() {
  return (
    <>
      <h1 className="sr-only">CareerPrep — The Placement Operating System</h1>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur"
      >
        <Sparkles className="h-4 w-4 text-[#77dd77]" aria-hidden />
        <span className="text-xs font-medium tracking-wide text-slate-200">Placement Operating System · 2025–26</span>
      </motion.div>

      {/* Headline */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-balance text-3xl font-semibold leading-tight text-slate-100 md:text-5xl"
      >
        The Placement Operating System
      </motion.p>

      {/* Subcopy */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 md:text-xl"
      >
        Engineering doesn’t reward who studies the most — it rewards who can
        <span className="font-medium text-slate-100"> think</span>,
        <span className="font-medium text-slate-100"> build</span>,
        <span className="font-medium text-slate-100"> communicate</span>, and
        <span className="font-medium text-slate-100"> be found</span>.
      </motion.p>

      {/* Four-part system */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">A deliberate operating system</p>
        <p className="mt-2 text-pretty text-lg leading-relaxed text-slate-200">
          <span className="font-semibold text-slate-100">Input → Skills</span>
          <span className="mx-2 text-slate-500">|</span>
          <span className="font-semibold text-slate-100">Output → Proof</span>
          <span className="mx-2 text-slate-500">|</span>
          <span className="font-semibold text-slate-100">Distribution → Visibility</span>
          <span className="mx-2 text-slate-500">|</span>
          <span className="font-semibold text-slate-100">Conversion → Offers</span>
        </p>
        <ul className="mt-4 space-y-3 text-slate-300">
          {[
            { title: "Skills", text: "learn what companies actually hire for" },
            { title: "Proof", text: "ship real projects, not coursework artifacts" },
            { title: "Visibility", text: "publish, document, and get indexed by the market" },
            { title: "Offers", text: "turn attention into interviews and conversions" },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#77dd77]" aria-hidden />
              <p className="text-base leading-relaxed">
                <span className="font-semibold text-slate-100">{item.title}</span>
                <span className="mx-2 text-slate-500">—</span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Divider */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#77dd77]/50 to-transparent" />
    </>
  );
}

// --- Dummy content renderer --------------------------------------------------
function renderTabContent(key: string) {
  switch (key) {
    case "skill-stack":
      return (
        <ContentBlock
          id="panel-skill-stack"
          title="Skill Stack"
          kicker="Foundation → Execution"
          bullets={[
            "Master core CS + modern frameworks with a weekly plan.",
            "Create a personal syllabus mapped to job descriptions.",
            "Close gaps using 2–week focus cycles.",
          ]}
        />
      );
    case "linkedin-engine":
      return (
        <ContentBlock
          id="panel-linkedin-engine"
          title="LinkedIn Engine"
          kicker="Profile → Pipeline"
          bullets={[
            "Headline, banner, and about that rank for keywords.",
            "Content cadence template (3 posts/week).",
            "Outbound playbook: alumni + founders + recruiters.",
          ]}
        />
      );
    case "github-factory":
      return (
        <ContentBlock
          id="panel-github-factory"
          title="GitHub Factory"
          kicker="Code → Credibility"
          bullets={[
            "Repo structure + README standard operating procedure.",
            "Changelog, issues, releases to show momentum.",
            "CI badge + live demo links for instant trust.",
          ]}
        />
      );
    case "internship-radar":
      return (
        <ContentBlock
          id="panel-internship-radar"
          title="Internship Radar"
          kicker="Signals → Opportunities"
          bullets={[
            "Track 50 target companies with alerts.",
            "Find hidden roles via angel networks/community.",
            "Set up referrals using warm intros script.",
          ]}
        />
      );
    case "project-polishing":
      return (
        <ContentBlock
          id="panel-project-polishing"
          title="Project Polishing"
          kicker="Prototype → Portfolio"
          bullets={[
            "UX pass, performance pass, and docs pass checklist.",
            "Screenshots, Loom demo, and one-pager template.",
            "Ship a case study that reads like a story.",
          ]}
        />
      );
    case "interview-drills":
      return (
        <ContentBlock
          id="panel-interview-drills"
          title="Interview Drills"
          kicker="Practice → Offers"
          bullets={[
            "DSA reps + system design warmups schedule.",
            "STAR story bank with 12 prompts.",
            "Mock loop with feedback rubric.",
          ]}
        />
      );
    case "signal-boost":
      return (
        <ContentBlock
          id="panel-signal-boost"
          title="Signal Boost"
          kicker="Distribution → Discovery"
          bullets={[
            "Weekly posting lanes: build logs, threads, demos.",
            "Collaborations + communities for reach.",
            "Newsletter + website for owned audience.",
          ]}
        />
      );
    case "final-sprint":
      return (
        <ContentBlock
          id="panel-final-sprint"
          title="Final Sprint — 90-Day Conversion"
          kicker="Focus → Conversion"
          bullets={[
            "12-week calendar from sourcing to closing.",
            "Metrics dashboard: apps, replies, screens, offers.",
            "De-risk with projects tailored to finalists.",
          ]}
        />
      );
    default:
      return null;
  }
}

// --- Content block -----------------------------------------------------------
function ContentBlock({ id, title, kicker, bullets }: {
  id: string;
  title: string;
  kicker: string;
  bullets: string[];
}) {
  return (
    <div id={id} role="tabpanel" aria-labelledby={`tab-${id.replace("panel-", "")}`}>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{kicker}</p>
      <h2 className="mt-1 text-xl font-semibold text-slate-100 md:text-2xl">{title}</h2>
      <p className="mt-2 text-slate-300">
        This is placeholder content for the <span className="text-slate-100 font-medium">{title}</span> section. Replace with real
        copy, visuals, and links when ready.
      </p>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#77dd77]" aria-hidden />
            <span className="text-slate-300">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
