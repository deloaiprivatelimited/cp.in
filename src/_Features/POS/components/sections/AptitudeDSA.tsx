import { BookOpen, Brain, Code, Clock, TrendingUp, AlertCircle } from 'lucide-react';

export default function DSAGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77dd77]/5 via-white to-[#77dd77]/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#77dd77] rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Aptitude & DSA 
          </h1>
          <h1> The First Door You Must Pass</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Companies don't test DSA to find "coding robots". They test if you can think when the clock is real.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#77dd77]" />
              In 45 Minutes They Read You
            </h2>
            <ul className="space-y-3">
              {[
                'Can you break a hard problem into simple shapes?',
                'Can you pick the right tool without guessing?',
                'Can you defend your choices like an engineer?',
                'Can you stay calm and finish under time?'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-[#77dd77] rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 italic border-l-4 border-[#77dd77] pl-4">
              This one filter silently decides who keeps running and who is out.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-[#77dd77]" />
              What Your DSA Behaviour Says About You
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">Your Action</th>
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">What Interviewer Reads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['You brute-force first', 'Panics / ignores constraints'],
                    ['You ask clarifying Qs first', 'Structured mind — will survive in real code'],
                    ['You jump to code instantly', 'Weak mental model'],
                    ['You narrate logic cleanly', 'Can work in teams and be trusted'],
                    ['You solve from first principles', 'Real intelligence, not memorised']
                  ].map(([action, read], i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{action}</td>
                      <td className="py-3 px-4 text-gray-600">{read}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-gray-700 font-medium">
              You don't get marked on the final answer — you get marked on the thinking path.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#77dd77]" />
              The 3 Pillars of Good Aptitude + DSA Prep
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: '1) Clear Thinking Base',
                  desc: 'Math sense, breaking problems, estimating, seeing patterns. This is what prevents your brain from freezing.'
                },
                {
                  title: '2) Small Set of Core Patterns',
                  desc: 'Arrays, trees, graphs, DP, greedy — not 700 random problems. A tight set you deeply understand and can transfer.'
                },
                {
                  title: '3) Clean Communication',
                  desc: 'Say out loud: "What I see → What matters → What I will try → Why this is safe". This is how you look hire-able, not just "correct".'
                }
              ].map((pillar, i) => (
                <div key={i} className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                  <h3 className="font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-500" />
              Wrong Prep = Silent Loss
            </h2>
            <ul className="space-y-3">
              {[
                'Solving daily but not learning "why" → no growth',
                'Copying editorials → no thinking muscle',
                'No timing → panic in the real round',
                'No narrative → reject despite right code'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 font-medium italic">
              Hard work without direction = years of effort with zero proof.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#77dd77]" />
              What Good Prep Actually Looks Like
            </h2>
            <ul className="space-y-3">
              {[
                'Write constraints before typing',
                'Name the invariant (what cannot change)',
                'State the plan in 3 lines, then code',
                'Explain trade-offs, not "it works"',
                'Do timed sessions — speed is part of the skill',
                'Keep a post-mortem log — every solve must teach you'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#77dd77] text-white text-xs font-bold rounded-full flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 font-medium italic border-l-4 border-[#77dd77] pl-4">
              This is how effort becomes signal, not sweat.
            </p>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">Two Hard Truths Most People Skip</h2>
            <div className="space-y-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2">Aptitude & DSA are not overnight skills</h3>
                <p className="text-gray-200 leading-relaxed">
                  Not a weekend, not a month — a long compounding journey.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2">You do NOT need Olympiad-level DSA</h3>
                <p className="text-gray-200 leading-relaxed">
                  You are not chasing medals — only a job. Prepare to the level the bar demands, not to mythical extremes.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">And One More: DSA Alone Doesn't Make You Hireable</h2>
            <p className="text-lg leading-relaxed mb-4">
              You still need an execution stack:
            </p>
            <p className="text-white/90 leading-relaxed">
              Real projects, shipping, debugging, clean code under messy reality. Thinking + execution is what makes an engineer — not just an accepted solution.
            </p>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>The path is long, but clarity makes it shorter.</p>
        </footer>
      </div>
    </div>
  );
}
