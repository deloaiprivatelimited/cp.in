import { FileText, Target, CheckCircle2, XCircle, Zap, Award } from 'lucide-react';

export default function ResumeEngine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77dd77]/5 via-white to-[#77dd77]/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#77dd77] rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Resume Engine — A One-Page Converter, Not a Biography
          </h1>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Your resume is not your life story. It is a one-page filter that answers one question fast:
              </p>
              <p className="text-2xl font-bold text-[#77dd77] text-center py-4">
                &quot;Is this person worth interviewing?&quot;
              </p>
              <div className="pt-6 border-t border-gray-200 space-y-2">
                <p className="text-gray-600">
                  No one reads resumes slowly. They scan in 12–20 seconds.
                </p>
                <p className="font-semibold text-gray-900">
                  If the right signals don&apos;t appear quickly, you are rejected without feedback.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/10 to-white rounded-3xl p-8 shadow-sm border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-[#77dd77]" />
              What a Resume Must Prove in One Page
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">Must Prove</th>
                    <th className="text-left py-3 px-4 text-gray-900 font-semibold">How It Is Read</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['You can build', 'Projects shipped, not coursework dumped'],
                    ['You can think', 'Achievements with constraints and impact'],
                    ['You can communicate', 'Clean, brief, structured writing'],
                    ['You are relevant', 'Skills that match the market, not random list']
                  ].map(([prove, read], i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="py-3 px-4 text-gray-900 font-semibold">{prove}</td>
                      <td className="py-3 px-4 text-gray-600">{read}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 font-medium italic border-l-4 border-[#77dd77] pl-4">
              A resume is not to impress — it is to qualify you for the next round.
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#77dd77]" />
              Structure of a Strong Resume (1 Page)
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-2xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Header (Only Useful Info)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Name, role (e.g. Backend Intern), email, LinkedIn, GitHub, city — no full address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-transparent rounded-2xl p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-green-500 text-white text-sm font-bold rounded-full flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Summary (2–3 lines, not a paragraph)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      What you do + what you have built + what you are seeking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#77dd77]/10 to-transparent rounded-2xl p-6 border-l-4 border-[#77dd77]">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#77dd77] text-white text-sm font-bold rounded-full flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Skills (Clustered, not laundry list)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Group by: Languages | Frameworks | Databases | Tools | Cloud
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent rounded-2xl p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-purple-500 text-white text-sm font-bold rounded-full flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Projects (This is the real meat)</h3>
                    <p className="text-gray-600 mb-3">3–4 relevant projects only — each with:</p>
                    <ul className="space-y-2 ml-4">
                      {[
                        'Goal/problem (1 short line)',
                        'Your contribution (not "we")',
                        'Impact or scale (users, requests/sec, constraints)',
                        'Proof links (live + repo)'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-transparent rounded-2xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Experience / Internships (if any)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Write with verbs and outcomes, not duties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-transparent rounded-2xl p-6 border-l-4 border-pink-500">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-pink-500 text-white text-sm font-bold rounded-full flex-shrink-0">
                    6
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Extras (optional but short)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hackathons, publications, teaching, open-source — only if signal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#77dd77]" />
              How to Write Projects So They Sell You
            </h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-red-300 font-semibold flex items-start gap-2">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Bad line:</span>
                </p>
                <p className="text-gray-300 ml-7 italic">
                  Built a notes app using React and Firebase.
                </p>
                <p className="text-[#77dd77] font-semibold flex items-start gap-2 mt-4">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Good line (specific & credible):</span>
                </p>
                <p className="text-white ml-7">
                  Shipped a responsive notes app (React + Firebase) used by 120+ students, with auth, sync and offline caching; deployed on Netlify.
                </p>
              </div>

              <div className="h-px bg-white/20" />

              <div className="space-y-3">
                <p className="text-red-300 font-semibold flex items-start gap-2">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Bad line:</span>
                </p>
                <p className="text-gray-300 ml-7 italic">
                  Made an API.
                </p>
                <p className="text-[#77dd77] font-semibold flex items-start gap-2 mt-4">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Good line:</span>
                </p>
                <p className="text-white ml-7">
                  Built and deployed a FastAPI microservice with JWT auth and rate limiting; handles ~2K requests/day on Railway.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-red-50 rounded-3xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-500" />
              Resume Red Flags That Kill You Immediately
            </h2>
            <ul className="space-y-3">
              {[
                '2–3 page resume (no one reads)',
                'Skill dump: "C, C++, Python, Java, Go, Rust, ML, Blockchain..."',
                'No links to anything live or on GitHub',
                '"Responsible for…" or "worked on…" with no results',
                'Paragraphs instead of bullet points',
                'English errors and formatting chaos',
                'Education at the top, projects hidden at bottom'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 font-bold border-t border-red-200 pt-6">
              Your resume is not judged for content only — it is judged for clarity, restraint, and proof.
            </p>
          </section>

          <section className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#77dd77]" />
              Polishing Rules Before Sending
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'One page only',
                'Consistent formatting and spacing',
                'Bullets begin with verbs',
                'Every technical claim backed by proof',
                'Links clickable',
                'No buzzwords without evidence',
                'Print-test: must look clean on paper'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#77dd77] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">The Core Truth</h2>
                <p className="text-lg leading-relaxed">
                  A resume is not the thing that gets you hired — it is the thing that keeps you alive long enough to be judged properly in the interview.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Quick Resume Test</h3>
              <p className="text-gray-600 mb-4">Before sending, ask yourself:</p>
              <div className="space-y-3">
                {[
                  'Can someone understand what I build in 15 seconds?',
                  'Do I have proof links for my top 3 claims?',
                  'Would I call this person for an interview based on this?',
                  'Is every word earning its place on the page?'
                ].map((question, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#77dd77] font-bold">{i + 1}.</span>
                      <span>{question}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>One page. Prove value. Get the interview.</p>
        </footer>
      </div>
    </div>
  );
}
