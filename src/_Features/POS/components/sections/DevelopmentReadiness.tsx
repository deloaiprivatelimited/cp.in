import { Rocket, Code2, Users, FileCheck, Shield, AlertTriangle } from 'lucide-react';

export default function DevelopmentReadiness() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
         
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Development Readiness — From "I Know" to "I Ship"
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Companies don&apos;t hire people who could build — they hire people who have built.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold">Classroom code</span> solves toy problems.<br />
                <span className="font-semibold">Production code</span> survives:
              </p>
              <ul className="space-y-2 pl-6">
                {[
                  'ambiguity',
                  'incomplete specs',
                  'reviews and rejections',
                  'users who break things',
                  "deadlines that don't care about elegance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#77dd77] rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 italic border-l-4 border-[#77dd77] pl-4">
                You are not judged on how correct your code is — you are judged on whether your code can live in the real world.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-[#77dd77]" />
              What "Shipping" Teaches You That Studying Never Will
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">You Encounter</th>
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">You Learn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Crashes & logs', 'How systems behave under stress, not on paper'],
                    ['API contracts and integrations', 'Real-world communication between services and teams'],
                    ['Reviews & refactors', 'Why "readable" > "clever"'],
                    ['Deployments & rollback', 'Reliability > romantic architecture'],
                    ['Users breaking expectation', 'Defensive thinking and graceful failures']
                  ].map(([encounter, learn], i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{encounter}</td>
                      <td className="py-3 px-4 text-gray-600">{learn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 font-medium">
              You become "hireable" the day you stop writing code for professors and start writing code for users who don&apos;t care how hard it was.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#77dd77]" />
              The 5 Non-Negotiables of Development Readiness
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: '1) One Execution Stack Deeply, Not Ten Superficially',
                  desc: 'Pick backend or frontend or mobile or cloud — one lane to competency, not tourist-mode everywhere.'
                },
                {
                  title: '2) Build in Public, Not in Private Folders',
                  desc: "If it's not visible, it doesn't exist. Projects must leave your laptop."
                },
                {
                  title: '3) Realistic Scopes, Not Fantasy SaaS',
                  desc: 'Build things that resemble what companies actually maintain: APIs, dashboards, queues, auth, CI/CD.'
                },
                {
                  title: '4) Team-Grade Hygiene',
                  desc: 'Docs, READMEs, folder structure, naming, issue tracking — your repo should look like something a company could fork today.'
                },
                {
                  title: '5) Stress Testing Reality',
                  desc: 'Rate limits, permissions, edge cases, slow networks — ship like someone who expects failure.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Wrong Dev Prep = Silent Rejection
            </h2>
            <ul className="space-y-3">
              {[
                '"Full-stack" tutorial clones with no ownership',
                'Projects that only run on your machine',
                'No README, no docs, no instructions — instant skip',
                'No authentication / no state / no failure handling',
                'Code that works until someone else touches it'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-gray-700 font-medium">
              <p>Working ≠ Ready.</p>
              <p className="italic">
                Ready means &quot;another engineer can continue from here tomorrow without calling you.&quot;
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-[#77dd77]" />
              What Good Dev Prep Actually Looks Like
            </h2>
            <ul className="space-y-3">
              {[
                'Ship a clean, documented service or UI with real constraints',
                'Add tests even if partial — it signals engineering maturity',
                'Deploy to a public endpoint — URL beats screenshots',
                'Write a 1-page architecture note — reviewers evaluate reasoning',
                'Maintain a CHANGELOG / issues board — signals team fitness',
                'Polish until a stranger can run it in 2 commands'
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
              This is how you move from student code → production-thinking engineer who gets offers
            </p>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-[#77dd77] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">The Real Test</h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Can another developer clone your repo, read your README, and understand what problem you solved and how to run it?
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  If yes — you&apos;re ready for production teams.<br />
                  If no — you&apos;re still writing for an audience of one.
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Ship early, ship often, ship like someone&apos;s counting on you.</p>
        </footer>
      </div>
    </div>
  );
}
