import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function Overview({ isWhiteBackground }: { isWhiteBackground: boolean }) {
  return (
    <div className="flex items-start justify-center px-4">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur ${
            isWhiteBackground ? "border-slate-200 bg-slate-100" : "border-white/10 bg-white/5"
          }`}
        >
          <Sparkles className="h-4 w-4 text-[#77dd77]" aria-hidden />
          <span className={`text-xs font-medium tracking-wide ${isWhiteBackground ? "text-slate-700" : "text-slate-200"}`}>
            Placement Operating System · 2025–26
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`text-balance text-3xl font-semibold leading-tight md:text-5xl ${
            isWhiteBackground ? "text-slate-900" : "text-slate-100"
          }`}
        >
          The Placement Operating System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-5 text-pretty text-lg leading-relaxed md:text-xl ${
            isWhiteBackground ? "text-slate-600" : "text-slate-300"
          }`}
        >
          Engineering doesn't reward who studies the most — it rewards who can
          <span className={`font-medium ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}> think</span>,
          <span className={`font-medium ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}> build</span>,
          <span className={`font-medium ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}> communicate</span>, and
          <span className={`font-medium ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}> be found</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-8 rounded-2xl border p-6 shadow-2xl backdrop-blur ${
            isWhiteBackground ? "border-slate-200 bg-white/80" : "border-white/10 bg-white/5"
          }`}
        >
          <p className={`text-sm font-medium uppercase tracking-wider ${isWhiteBackground ? "text-slate-500" : "text-slate-400"}`}>
            A deliberate operating system
          </p>
          <p className={`mt-2 text-pretty text-lg leading-relaxed ${isWhiteBackground ? "text-slate-700" : "text-slate-200"}`}>
            <span className={`font-semibold ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}>Input → Skills</span>
            <span className={isWhiteBackground ? "mx-2 text-slate-400" : "mx-2 text-slate-500"}>|</span>
            <span className={`font-semibold ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}>Output → Proof</span>
            <span className={isWhiteBackground ? "mx-2 text-slate-400" : "mx-2 text-slate-500"}>|</span>
            <span className={`font-semibold ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}>Distribution → Visibility</span>
            <span className={isWhiteBackground ? "mx-2 text-slate-400" : "mx-2 text-slate-500"}>|</span>
            <span className={`font-semibold ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}>Conversion → Offers</span>
          </p>
          <ul className={`mt-4 space-y-3 ${isWhiteBackground ? "text-slate-600" : "text-slate-300"}`}>
            {[
              { title: "Skills", text: "learn what companies actually hire for" },
              { title: "Proof", text: "ship real projects, not coursework artifacts" },
              { title: "Visibility", text: "publish, document, and get indexed by the market" },
              { title: "Offers", text: "turn attention into interviews and conversions" },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#77dd77]" aria-hidden />
                <p className="text-base leading-relaxed">
                  <span className={`font-semibold ${isWhiteBackground ? "text-slate-900" : "text-slate-100"}`}>{item.title}</span>
                  <span className={isWhiteBackground ? "mx-2 text-slate-400" : "mx-2 text-slate-500"}>—</span>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
