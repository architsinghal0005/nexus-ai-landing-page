export default function Footer() {
  return (
    <footer id="footer" className="bg-[#172B36] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFC801] text-black flex items-center justify-center font-bold">
                AI
              </div>

              <h2 className="text-3xl font-bold">Nexus AI</h2>
            </div>

            <p className="mt-6 text-gray-300 leading-7 max-w-md">
              Empowering businesses with AI-powered automation, analytics,
              workflow management and enterprise-grade security.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC801] hover:text-black transition-all"
              >
                X
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC801] hover:text-black transition-all"
              >
                in
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC801] hover:text-black transition-all"
              >
                GH
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="font-bold text-xl mb-6">Product</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#">Features</a>
              </li>

              <li>
                <a href="#">Pricing</a>
              </li>

              <li>
                <a href="#">Integrations</a>
              </li>

              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-bold text-xl mb-6">Resources</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Documentation</a>
              </li>

              <li>
                <a href="#">Support</a>
              </li>

              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="font-bold text-xl mb-6">Newsletter</h3>

            <p className="text-gray-300 mb-5">
              Get AI updates directly to your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-xl px-4 py-3 text-black"
            />

            <button className="mt-4 w-full rounded-xl bg-[#FFC801] py-3 text-black font-bold hover:scale-105 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2026 Nexus AI. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            <a href="#">Privacy</a>

            <a href="#">Terms</a>

            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
