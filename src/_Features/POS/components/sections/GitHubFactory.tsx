import { Github, GitBranch, FileCode, XCircle, CheckCircle2, Star } from 'lucide-react';

export default function GitHubFactory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77dd77]/5 via-white to-[#77dd77]/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#77dd77] rounded-2xl mb-6">
            <Github className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            GitHub Factory — Make Your Repos Look Hire-Ready, Not Student-Level
          </h1>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Recruiters and engineers don&apos;t read your resume first — they open your GitHub to see if you are real or just theoretical.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>A weak GitHub says: &quot;I only code for assignments.&quot;</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#77dd77] font-bold">✓</span>
                  <span className="font-semibold text-[#77dd77]">A strong GitHub says: &quot;I can work like an engineer.&quot;</span>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileCode className="w-6 h-6 text-[#77dd77]" />
              What GitHub Signals to Employers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">What They See</th>
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">What They Assume About You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Empty / random repos', 'Not serious about development'],
                    ['Clean structured repos', 'Can work in a team codebase'],
                    ['README + docs', 'Communicates clearly'],
                    ['Commits over months', 'Consistent, not last-minute prep'],
                    ['Issues / branches', 'Knows real workflow, not only main branch']
                  ].map(([see, assume], i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{see}</td>
                      <td className="py-3 px-4 text-gray-600">{assume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 font-medium italic border-l-4 border-[#77dd77] pl-4">
              GitHub is not storage — it is public proof of engineering habits.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-[#77dd77]" />
              5 Rules of a Strong GitHub Profile
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#77dd77]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fewer repos, higher quality</h3>
                    <p className="text-gray-600 leading-relaxed">
                      10 clean projects &gt; 50 half-done toy apps.
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
                    <h3 className="font-bold text-gray-900 mb-2">Every project must have a README</h3>
                    <p className="text-gray-600 leading-relaxed">
                      That explains: What, Why, How to run, Tech stack, Screenshots/link.
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
                    <h3 className="font-bold text-gray-900 mb-2">Realistic project structure</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Folders, environment files, configs — not one app.py with everything.
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
                    <h3 className="font-bold text-gray-900 mb-2">Use branches, issues, PRs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Even if solo — it shows you know the team workflow.
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
                    <h3 className="font-bold text-gray-900 mb-2">Ship to production whenever possible</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A live URL beats a zip file every single time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-500" />
              What Bad GitHub Prep Looks Like
            </h2>
            <ul className="space-y-3">
              {[
                'Copied tutorial code without edits',
                'Commit history: "one-day dump" before interview',
                'No docs, no instructions, no structure',
                '"Runs on my laptop only" projects',
                'Academic artifacts renamed as "portfolio"'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 font-bold">
              These repos get closed after 10 seconds.
            </p>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#77dd77]" />
              What Good GitHub Prep Looks Like
            </h2>
            <ul className="space-y-4">
              {[
                'One backend API with docs + deployed link',
                'One UI app with clean state + auth + error handling',
                'One real-world clone upgraded (not copied)',
                'One team-style repo using issues/PRs',
                'One "deep" repo showing strong skill in chosen stack'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 leading-relaxed">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#77dd77] text-white text-xs font-bold rounded-full flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#77dd77] font-bold text-lg">
              Quality and clarity beat volume.
            </p>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <GitBranch className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
                <p className="text-lg leading-relaxed">
                  GitHub is your portfolio in code form — make it look like someone could hire you from it today
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Quick Checklist for Each Repo</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {[
                    '✓ Clear README with setup instructions',
                    '✓ .gitignore configured properly',
                    '✓ Consistent commit messages',
                    '✓ Working demo or screenshots'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#77dd77] font-bold">{item.charAt(0)}</span>
                      <span className="text-sm">{item.slice(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    '✓ Tech stack clearly listed',
                    '✓ License file included',
                    '✓ No hardcoded secrets/keys',
                    '✓ Live deployment link if possible'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#77dd77] font-bold">{item.charAt(0)}</span>
                      <span className="text-sm">{item.slice(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mt-4 pt-4 border-t border-blue-200">
                Every repo should answer: What does this do? How do I run it? Why does it matter?
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Clean repos. Clear docs. Real proof.</p>
        </footer>
      </div>
    </div>
  );
}
