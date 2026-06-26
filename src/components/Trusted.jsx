export default function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "OpenAI",
    "Amazon",
    "Netflix",
    "Spotify",
  ];

  return (
    <section className="bg-[#F1F6F4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-[0.3em] text-sm font-semibold">
          Trusted by innovative companies worldwide
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-md border border-gray-200 text-[#114C5A] font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
