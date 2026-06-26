import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F1F6F4] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#114C5A]">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">Loved by Teams Worldwide</h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Thousands of companies trust Nexus AI to automate and scale their
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#114C5A]">10K+</h3>
            <p className="text-gray-500 mt-2">Happy Customers</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#114C5A]">99.9%</h3>
            <p className="text-gray-500 mt-2">System Uptime</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#114C5A]">150+</h3>
            <p className="text-gray-500 mt-2">Countries</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((user) => (
            <div
              key={user.id}
              className="rounded-3xl bg-white shadow-xl p-8 hover:-translate-y-3 hover:rotate-[1deg] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#114C5A] text-white flex items-center justify-center font-bold">
                  {user.image}
                </div>

                <div>
                  <h3 className="font-bold text-lg">{user.name}</h3>

                  <p className="text-gray-500 text-sm">{user.role}</p>

                  <p className="text-[#114C5A] text-sm font-semibold">
                    {user.company}
                  </p>
                </div>
              </div>

              <div className="flex mt-6 text-[#FFC801] text-xl">{"★★★★★"}</div>

              <p className="mt-6 text-gray-600 leading-7">"{user.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
