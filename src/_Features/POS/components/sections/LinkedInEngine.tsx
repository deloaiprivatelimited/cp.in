import { Zap, Award, TrendingUp, XCircle, CheckCircle2, Lightbulb } from 'lucide-react';

export default function LinkedInEngine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77dd77]/5 via-white to-[#77dd77]/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#77dd77] rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            LinkedIn Engine — Turn Your Profile Into a Recruiter Magnet
          </h1>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                LinkedIn is not a diary — it is a marketplace of skills and proof.
              </p>
              <p className="text-lg font-medium">
                You do not get seen for existing — you get seen for being searchable and relevant.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">Most students treat LinkedIn like a resume storage.</p>
                <p className="text-[#77dd77] font-semibold mt-2">
                  Top candidates use it like a distribution channel for their work.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#77dd77]" />
              What LinkedIn Actually Does For You
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">You Do</th>
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Show proof of work', 'Recruiters trust you faster'],
                    ['Write clear headline', 'You show what you offer in 3 seconds'],
                    ['Post small wins often', 'People remember you when they have roles'],
                    ['Connect with hiring people', 'You get seen without applying'],
                    ['Comment with value', 'You build recall without bragging']
                  ].map(([action, result], i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{action}</td>
                      <td className="py-3 px-4 text-gray-600">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 font-medium italic border-l-4 border-[#77dd77] pl-4">
              LinkedIn = visibility without asking anyone for referrals.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#77dd77]" />
              5 Must-Haves on a Strong LinkedIn Profile
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Clear Headline (Not &quot;Student&quot;)</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      Example: Backend Developer | FastAPI + PostgreSQL | Built 3 live APIs | Seeking Internships
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
                    <h3 className="font-bold text-gray-900 mb-2">About Section That Tells Your Value Fast</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Not life story — 4–5 lines of what you can do today.
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
                    <h3 className="font-bold text-gray-900 mb-2">Featured Section = Proof Shelf</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pin: GitHub repos, live demos, blog posts, certificates that matter.
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
                    <h3 className="font-bold text-gray-900 mb-2">Experience/Projects Written as Outcomes</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Not &quot;made website&quot; — write what impact it delivered or what constraint you solved.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Activity That Keeps You Discoverable</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Likes don&apos;t matter — posts and comments with content do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-500" />
              Wrong LinkedIn = Invisible Candidate
            </h2>
            <ul className="space-y-3">
              {[
                'Headline: "Student at XYZ"',
                'Empty "Featured" section',
                'Posts only when job hunting',
                'Projects written as "Built a clone"',
                'Zero comments, zero proof'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 font-bold">
              No signal = no discovery.
            </p>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#77dd77]" />
              What Good LinkedIn Activity Looks Like
            </h2>
            <ul className="space-y-4">
              {[
                'Short posts sharing what you built or learned this week',
                'Screenshots + 2–3 lines explaining why it matters',
                'Comments that add value, not "Nice!" or "Congrats"',
                'Documenting progress, not waiting to be perfect'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-[#77dd77] rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#77dd77] font-bold text-lg">
              Small signals repeated beat big signals delayed.
            </p>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">The Core Truth</h2>
                <p className="text-lg leading-relaxed mb-3">
                  LinkedIn is not for begging, it is for being found.
                </p>
                <p className="text-white/90 leading-relaxed">
                  You make yourself findable by showing proof, not by asking for chances.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900">Quick Activity Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Posts</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Share one thing you built</li>
                    <li>• Explain one problem you solved</li>
                    <li>• Document one thing you learned</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Engagement</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Comment on 2-3 relevant posts</li>
                    <li>• Add insight, not just praise</li>
                    <li>• Connect with 1-2 people in your field</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mt-4">
                Consistency beats perfection. Start small, stay visible.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Build in public. Share your journey. Get discovered.</p>
        </footer>
      </div>
    </div>
  );
}
