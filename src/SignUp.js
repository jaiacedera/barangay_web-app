import "./App.css";

function SignUp({ onNavigate, page }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 relative">
      <div
        aria-hidden
        className="fixed inset-0 bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/landscape-bg.png)",
          backgroundPosition: "45% center",
          backgroundSize: "cover",
        }}
      />

      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 pt-4 sm:pt-6 pb-3 gap-4 sm:gap-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-emerald-600 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/buso%20buso%20logo%20.png"
              alt="Barangay Buso-Buso logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 tracking-wide">
              LAUREL, BATANGAS
            </p>
            <h1 className="text-xl font-bold text-slate-800">
              Barangay Buso-Buso
            </h1>
            <p className="text-xl font-bold text-slate-800">EOC Dashboard</p>
          </div>
        </div>
        {/* removed duplicate center nav; single right-aligned nav below */}
        <nav className="flex items-center gap-3">
          <div
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[92px] sm:min-w-[140px] h-10 sm:h-11 transition hover:bg-[#274C77]/50 ${page === "login" ? "bg-[#274C77]/50" : "bg-white"}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("login");
              }}
              className={`w-full h-full flex items-center justify-center font-semibold text-sm sm:text-lg ${page === "login" ? "text-white" : "text-[#274C77]"} group-hover:text-white`}
            >
              Log In
            </button>
          </div>

          <div
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[92px] sm:min-w-[140px] h-10 sm:h-11 transition hover:bg-[#274C77]/50 ${page === "signup" ? "bg-[#274C77]/50" : "bg-white"}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("signup");
              }}
              className={`w-full h-full flex items-center justify-center font-semibold text-sm sm:text-lg ${page === "signup" ? "text-white" : "text-slate-700"} group-hover:text-white`}
            >
              Sign Up
            </button>
          </div>

          <div
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[72px] sm:min-w-[110px] h-10 sm:h-11 transition hover:bg-[#274C77]/50 bg-white`}
          >
            <a
              href="#about"
              className="w-full h-full flex items-center justify-center font-semibold text-sm sm:text-lg text-slate-700 group-hover:text-white"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex min-h-0">
        <section className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
            Sign Up
          </h2>

          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2.5 rounded-full border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-full border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1.5">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-full border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
              />
            </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 rounded-full border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 rounded-full border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#274C77] text-white font-semibold uppercase tracking-wide hover:bg-[#1e3a5c] transition"
              >
                REQUEST ACCESS
              </button>
            </div>

            <p className="text-center text-sm text-slate-500">
              Approval required for access
            </p>

            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-sm text-slate-500">or</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-full bg-[#274C77] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#1e3a5c] transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="#EA4335"
                  d="M12 11.5v3.9h5.3c-.2 1.2-.9 2.2-1.9 2.9l3 2.3C20.9 20.6 22 16.8 22 12.9c0-.8-.1-1.6-.2-2.4H12z"
                />
                <path
                  fill="#34A853"
                  d="M6.3 14.4c-.4-1.1-.4-2.3 0-3.4V8.7l-3-2.3C1.4 9.2 1 11 1 12.9c0 1.9.4 3.7 2.3 6.9l3-2.3z"
                />
                <path
                  fill="#4285F4"
                  d="M12 4.5c1.6 0 3 .6 4.1 1.6l3.1-3.1C18.1 1.1 15.1 0 12 0 7.7 0 3.9 1.9 1.8 5.4l3 2.3C6.4 6 9 4.5 12 4.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M22 12.9c0-.8-.1-1.6-.2-2.4H12v4.5h5.3c-.4 1.5-1.4 2.7-2.9 3.5l3 2.3c1.7-1.6 3-4 3-7.9z"
                />
              </svg>
              Continue with Google
            </button>
          </form>
        </section>

        <section className="hidden lg:block flex-1 min-h-[360px]" aria-hidden />
      </main>

      <footer className="px-8 py-4 text-sm text-slate-500">
        <p>© 2025 Barangay Buso-Buso</p>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default SignUp;
