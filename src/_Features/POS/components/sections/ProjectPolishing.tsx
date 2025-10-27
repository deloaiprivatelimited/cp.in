import { Sparkles, ExternalLink, CheckCircle2, GitBranch, FileText, XCircle } from 'lucide-react';

export default function ProjectPolishing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77dd77]/5 via-white to-[#77dd77]/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#77dd77] rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Project Polishing — Turn Ordinary Projects into 30-Second &quot;Hire Me&quot; Signals
          </h1>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Most projects fail not because they are bad — but because they are unpresentable and unusable.
              </p>
              <p className="text-lg font-semibold text-[#77dd77] mt-6 pt-6 border-t border-gray-200">
                You are not judged on the idea — you are judged on how ready and real it looks.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <ExternalLink className="w-6 h-6 text-[#77dd77]" />
              What a Recruiter Must See in 30 Seconds
            </h2>
            <div className="space-y-5">
              {[
                {
                  num: '1',
                  title: 'Live Link (Not screenshots)',
                  desc: 'If they can&apos;t open it, they won&apos;t evaluate it.'
                },
                {
                  num: '2',
                  title: 'Responsive & usable UI',
                  desc: 'Desktop-only or broken layout = instant rejection in front-end checks.'
                },
                {
                  num: '3',
                  title: 'Clean README',
                  desc: 'Explain what it is, why it matters, and how to run it — clearly.'
                },
                {
                  num: '4',
                  title: 'GitHub Repo that looks team-ready',
                  desc: 'Folders, naming, commit history, not a random dump.'
                },
                {
                  num: '5',
                  title: 'One-page release notes / changelog',
                  desc: 'Shows it evolved like a real product, not a one-day assignment.'
                }
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-white/50 rounded-xl p-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#77dd77]" />
              Checklist to Convert a Raw Project into a Polished One
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Make it Live</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deploy to Render / Vercel / Netlify / Railway — live &gt; local always.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-transparent rounded-2xl p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Responsiveness & Stability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fix basic breakpoints, handle errors, loading states, bad inputs.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#77dd77]/10 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Proper Documentation</h3>
                <p className="text-gray-600 mb-3">README must include:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    'problem it solves',
                    'features',
                    'tech stack',
                    'how to run',
                    'live demo link',
                    'sample credentials (if login)',
                    'screenshots or GIF'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#77dd77] rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent rounded-2xl p-6 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">GitHub Clean-Up</h3>
                <ul className="space-y-2 ml-4">
                  {[
                    'use branches, not only main',
                    'meaningful commits, not "final commit"',
                    '.env.example for env logic',
                    'add LICENSE if open source',
                    'add basic tests if possible'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-transparent rounded-2xl p-6 border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Live Release Notes (brief)</h3>
                <p className="text-gray-600 leading-relaxed">
                  A simple RELEASES.md or CHANGELOG.md to show decisions over time.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GitBranch className="w-6 h-6 text-[#77dd77]" />
              Before vs After Polishing
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-white font-semibold">Raw Student Project</th>
                    <th className="text-left py-3 px-4 text-[#77dd77] font-semibold">Polished Hire-Ready Project</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ['Only runs locally', 'Live URL anyone can test'],
                    ['No docs', 'Clear README + run steps'],
                    ['Messy repo', 'Structured, clean, documented'],
                    ['UI breaks', 'Responsive and stable'],
                    ['No story', 'Changelog shows thinking']
                  ].map(([before, after], i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-red-300 flex items-start gap-2">
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{before}</span>
                      </td>
                      <td className="py-3 px-4 text-[#77dd77]">
                        <span className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{after}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">The Core Truth</h2>
                <p className="text-lg leading-relaxed">
                  A polished project is not &quot;fancy&quot; — it is prepared for another engineer to use, judge, and trust without you in the room.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Quick Polish Priority List</h3>
              <div className="space-y-3">
                {[
                  { priority: 'Critical', items: ['Deploy live', 'Add README', 'Fix broken UI'] },
                  { priority: 'High', items: ['Make responsive', 'Add error handling', 'Clean commit history'] },
                  { priority: 'Nice to Have', items: ['Add tests', 'Create changelog', 'Add animations'] }
                ].map((group) => (
                  <div key={group.priority} className="bg-white rounded-xl p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        group.priority === 'Critical' ? 'bg-red-500' :
                        group.priority === 'High' ? 'bg-orange-500' : 'bg-blue-500'
                      }`} />
                      {group.priority}
                    </h4>
                    <p className="text-sm text-gray-600">{group.items.join(' • ')}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mt-4 pt-4 border-t border-blue-200">
                Start with critical items. A live, documented project beats a perfect local one.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Polish makes the difference between &quot;interesting&quot; and &quot;hire-worthy&quot;.</p>
        </footer>
      </div>
    </div>
  );
}
