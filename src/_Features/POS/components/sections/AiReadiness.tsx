import { Sparkles, Code2, Package, Eye, MessageSquare, Shield } from 'lucide-react';

export default function AIReadiness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#77dd77] to-emerald-500 rounded-3xl mb-8 shadow-lg shadow-[#77dd77]/20">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            AI Readiness — Becoming a Future-Proof Engineer
          </h1>
        </header>

        <div className="space-y-12">
          <section className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why AI matters:</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In 2025, AI is no longer optional—employers expect engineers to understand, utilize, and work alongside AI-powered tools.
              </p>
              <p className="text-lg font-semibold text-[#77dd77]">
                AI doesn&apos;t replace engineers; it supercharges those who know how to leverage it for productivity, problem-solving, and innovation.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-blue-500" />
              1. Skills: Learn Market-Relevant AI Tools
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  Familiarize yourself with industry tools like <span className="font-semibold text-gray-900">GitHub Copilot</span>, <span className="font-semibold text-gray-900">OpenAI</span> (e.g., ChatGPT, Gemini), <span className="font-semibold text-gray-900">Tabnine</span>, <span className="font-semibold text-gray-900">Kite</span>, and workflow automation (<span className="font-semibold text-gray-900">Zapier</span>, <span className="font-semibold text-gray-900">Make</span>).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  Understand <span className="font-semibold text-gray-900">prompt engineering</span>: how to give clear instructions to AI to generate useful code, documentation, or tests.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  Explore basic <span className="font-semibold text-gray-900">AI APIs</span> (e.g., OpenAI, Hugging Face)—integrate them with projects to demonstrate applied skills.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  Stay updated on new AI tools; rapid adoption is a key market skill.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#77dd77]/5 to-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-[#77dd77]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-[#77dd77]" />
              2. Proof: Ship Real Projects with AI Integration
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Build at least one project where AI is central:
              </p>
              <div className="bg-white rounded-xl p-5 border border-[#77dd77]/30">
                <p className="text-gray-600 mb-2 font-medium">Example:</p>
                <p className="text-gray-700">
                  chatbot, code generator, auto-doc generator, workflow automation using an AI API.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#77dd77]/30">
                <p className="text-gray-600 mb-3 font-medium">Document in your README:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    'AI features used',
                    'Impact on user experience/performance',
                    'Risks & limitations identified (demonstrates responsible use)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#77dd77] rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#77dd77]/30">
                <p className="text-gray-700 leading-relaxed">
                  Add tests or validation steps—shows you understand AI outputs aren&apos;t perfect.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-purple-500" />
              3. Visibility: Document & Publish AI Work
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  Highlight AI-based projects in your <span className="font-semibold text-gray-900">LinkedIn Featured section</span> and summaries (&quot;Built XYZ with OpenAI API for auto-grading assignments&quot;).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  Write posts or threads on LinkedIn or Twitter about learning AI tools, prompt engineering wins/fails, or ethical considerations in student projects.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  Tag repositories on GitHub with <span className="font-mono text-sm bg-gray-100 px-2 py-0.5 rounded">&quot;AI&quot;</span>, <span className="font-mono text-sm bg-gray-100 px-2 py-0.5 rounded">&quot;prompt-engineering&quot;</span>, <span className="font-mono text-sm bg-gray-100 px-2 py-0.5 rounded">&quot;Copilot&quot;</span>, etc. to boost discoverability.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  Mention AI skills in profile headlines (&quot;Backend Developer | AI Readiness | Built projects with Copilot & OpenAI API&quot;).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-orange-500" />
              4. Conversion: AI Skills on Resume & Outreach
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed font-medium">Use bullet points such as:</p>
              <div className="space-y-3">
                {[
                  '&quot;Integrated OpenAI API for text generation and review in student dashboard (used by 100+ users).&quot;',
                  '&quot;Used GitHub Copilot to accelerate backend development; documented experience and optimizations.&quot;',
                  '&quot;Automated CI/CD pipeline using AI-based test generation tools.&quot;'
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-orange-200">
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-orange-200 mt-4">
                <p className="text-gray-700 leading-relaxed">
                  For internship radar/outreach, mention how your AI experience will accelerate team productivity, code review, or feature launches.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-500" />
              5. Responsible AI: Ethics, Validation, and Awareness
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="text-gray-700 leading-relaxed">
                  Show awareness that AI output requires validation, not blind trust: include this in project documentation and interview prep.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="text-gray-700 leading-relaxed">
                  Be ready to discuss ethical scenarios: bias, privacy, limitations—interviewers increasingly value this.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200">
                <p className="text-gray-700 leading-relaxed">
                  Acknowledge failures and lessons in AI-driven projects—shows maturity and real-world readiness.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">Summary Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#77dd77]">
                    <th className="text-left py-3 px-4 text-white font-semibold">Stage</th>
                    <th className="text-left py-3 px-4 text-[#77dd77] font-semibold">AI Readiness Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ['Skills', 'Learn AI tools, prompt engineering, basic model integration'],
                    ['Proof', 'Build/ship a project with applied AI, document impact'],
                    ['Visibility', 'Feature AI projects on GitHub/LinkedIn, share learning posts'],
                    ['Conversion', 'Resume bullets, outreach talks up AI advantage'],
                    ['Responsible', 'Document validation, ethics, risks in projects']
                  ].map(([stage, actions], i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-[#77dd77] font-semibold">{stage}</td>
                      <td className="py-3 px-4 text-gray-300">{actions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-[#77dd77] rounded-3xl p-8 shadow-lg text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-lg leading-relaxed">
                AI-ready engineers don&apos;t fear automation—they use it to ship faster, solve harder problems, and prove they can thrive in the future of software engineering.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-20 text-center text-gray-500 text-base">
          <p>Learn AI tools. Build with AI. Document responsibly.</p>
        </footer>
      </div>
    </div>
  );
}
