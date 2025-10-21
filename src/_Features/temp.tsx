function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-5 py-2 rounded-full border-2 border-[#77dd77] bg-[#77dd77]/5">
              <span className="text-[#77dd77] font-semibold text-sm tracking-wide uppercase">
                2025–26 Batch
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Careerprep
              <span className="block mt-2 text-[#77dd77]">
                Placement Operating System
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-10 leading-relaxed">
              Engineering doesn't reward who studies the most — it rewards who can{' '}
              <span className="text-[#77dd77] font-semibold">think</span>,{' '}
              <span className="text-[#77dd77] font-semibold">build</span>,{' '}
              <span className="text-[#77dd77] font-semibold">communicate</span>, and{' '}
              <span className="text-[#77dd77] font-semibold">be found</span>.
            </p>

            <div className="bg-gray-50 border-l-4 border-[#77dd77] p-8 mb-12 text-left rounded-r-lg shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed">
                Most students waste college years collecting grades and certificates without creating anything hireable.
                Strong careers are built on a deliberate system:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#77dd77] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#77dd77]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#77dd77]">→</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Input → Skills</h3>
                    <p className="text-gray-600">Learn what companies actually hire for</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#77dd77] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#77dd77]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#77dd77]">→</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Output → Proof</h3>
                    <p className="text-gray-600">Ship real projects, not coursework artifacts</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#77dd77] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#77dd77]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#77dd77]">→</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Distribution → Visibility</h3>
                    <p className="text-gray-600">Publish, document, and get indexed by the market</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#77dd77] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#77dd77]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#77dd77]">→</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Conversion → Offers</h3>
                    <p className="text-gray-600">Turn attention into interviews and conversions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#77dd77] text-white rounded-2xl p-8 shadow-xl">
              <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
                You don't get hired for what you know — you get hired for what you can{' '}
                <span className="underline decoration-2">show</span>, how you{' '}
                <span className="underline decoration-2">communicate</span>, and whether you can be{' '}
                <span className="underline decoration-2">found</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#77dd77] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-40 w-64 h-64 bg-[#77dd77] rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
