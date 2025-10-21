import { motion } from "framer-motion";
import { CheckCircle2, Megaphone } from "lucide-react";

export default function SignalBoost({ isWhiteBackground }: { isWhiteBackground: boolean }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="p-3 rounded-xl bg-[#77dd77]/10 border border-[#77dd77]/20">
            <Megaphone className="h-6 w-6 text-[#77dd77]" />
          </div>
          <div>
            <p className={`text-xs font-medium uppercase tracking-wider ${isWhiteBackground ? "text-slate-500" : "text-slate-400"}`}>Distribution → Discovery</p>
            <h2 className={`text-3xl font-semibold md:text-4xl ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}>Signal Boost</h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-lg leading-relaxed mb-8 ${isWhiteBackground ? "text-slate-600" : "text-slate-300"}`}
        >
          Amplify your work through strategic content distribution. Build an audience and get discovered by companies actively looking for talent like yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {[
            "Weekly posting lanes: build logs, threads, demos.",
            "Collaborations + communities for reach.",
            "Newsletter + website for owned audience.",
            "Share wins, learnings, and project milestones.",
            "Engage authentically with developer communities.",
            "Build a personal brand that attracts opportunities.",
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 rounded-xl border p-4 backdrop-blur ${
                isWhiteBackground ? "border-slate-200 bg-white/80" : "border-white/10 bg-white/5"
              }`}
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#77dd77]" aria-hidden />
              <span className={isWhiteBackground ? "text-slate-600" : "text-slate-300"}>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
