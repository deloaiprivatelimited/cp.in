import { Radar, Target, Mail, TrendingUp, XCircle, CheckCircle2, Zap } from 'lucide-react';

export default function InternshipRadar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77dd77]/5 via-white to-[#77dd77]/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#77dd77] rounded-2xl mb-6">
            <Radar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Internship Radar — Getting Internships Without Luck, CGPA or Referrals
          </h1>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Most students wait for &quot;opportunities to come&quot;.
              </p>
              <p className="text-lg font-semibold text-[#77dd77]">
                Hireable students go to where internships live with a repeatable method.
              </p>
              <p className="mt-6 pt-6 border-t border-gray-200 text-gray-600">
                You don&apos;t need 1,000 companies to say yes — you need 5–8 right ones to notice you at the right time.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-[#77dd77]" />
              What Actually Gets Internships (Not Myths)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">People Think</th>
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">Reality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['"Need high CGPA"', 'Companies hire proof + skill, not marks'],
                    ['"Need strong referral"', 'Cold outreach with proof works too'],
                    ['"Need to apply to MNCs"', 'Most offers come from Tier-2/3 product teams & startups'],
                    ['"Apply once and wait"', 'Internships come from consistent outreach, not events']
                  ].map(([myth, reality], i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{myth}</td>
                      <td className="py-3 px-4 text-gray-600">{reality}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 font-medium italic border-l-4 border-[#77dd77] pl-4">
              Internship is not a lottery — it is a search + timing + signal game.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#77dd77]" />
              The 4 Channels That Actually Work
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">LinkedIn Direct Outreach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Messaging hiring managers / founders with short proof-based pitch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cold Email to CTOs / Founders</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Short, respectful, with a link to what you&apos;ve built.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Internship Boards & Early Talent Portals</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AngelList, Wellfound, YCombinator jobs, Internshala (filtered), company careers pages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Public Visibility Signals</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Posts showing shipped work — internships often find you this way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-500" />
              Wrong Internship Strategy = No Replies
            </h2>
            <ul className="space-y-3">
              {[
                '"Hi sir any openings?"',
                'Copy-paste generic messages',
                'Sending resume without any proof of work',
                'Applying once and waiting silently',
                'Spamming instead of targeted outreach'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 font-bold">
              Silence is the correct response to weak signals.
            </p>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#77dd77]" />
              What Good Internship Outreach Looks Like
            </h2>
            <p className="text-gray-300 mb-4">Short, respectful, proof-first, not begging</p>
            <div className="bg-black/30 rounded-2xl p-6 font-mono text-sm leading-relaxed border border-white/10">
              <p className="text-gray-300">Hi &lt;Name&gt;,</p>
              <p className="text-white mt-3">I build backend services in FastAPI + Postgres.</p>
              <p className="text-white">Recently shipped a live auth-enabled API (demo + GitHub below).</p>
              <p className="text-white mt-3">If you have any intern or part-time engineering work,</p>
              <p className="text-white">I would love to contribute. Can start immediately.</p>
              <p className="text-[#77dd77] mt-3">Live: &lt;url&gt;</p>
              <p className="text-[#77dd77]">GitHub: &lt;repo&gt;</p>
            </div>
            <p className="mt-6 text-[#77dd77] font-bold text-lg">
              No drama. No begging. Just signal.
            </p>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Internship Radar Mindset</h2>
                <div className="space-y-2 text-lg">
                  <p className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Volume beats hope</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Timing beats talent</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Proof beats GPA</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Consistency beats luck</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Weekly Outreach Plan</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-[#77dd77] mb-2">5–10</div>
                  <p className="text-sm text-gray-700 font-semibold">LinkedIn Messages</p>
                  <p className="text-xs text-gray-600 mt-1">To hiring managers, founders</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-[#77dd77] mb-2">3–5</div>
                  <p className="text-sm text-gray-700 font-semibold">Cold Emails</p>
                  <p className="text-xs text-gray-600 mt-1">To CTOs, tech leads</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-[#77dd77] mb-2">10–15</div>
                  <p className="text-sm text-gray-700 font-semibold">Job Board Applications</p>
                  <p className="text-xs text-gray-600 mt-1">Targeted, not spray-and-pray</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mt-4 pt-4 border-t border-blue-200">
                Track your outreach. Follow up after 5–7 days. Keep building while you reach out.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Core Truth</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                You don&apos;t &quot;wait to be chosen&quot; — you present yourself where decisions happen and make it easy to say yes.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Search actively. Signal clearly. Start immediately.</p>
        </footer>
      </div>
    </div>
  );
}
