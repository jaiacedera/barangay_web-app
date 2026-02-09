import "./App.css";

function Login({ onNavigate, page }) {
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

        <nav className="flex items-center gap-3">
          <div
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[92px] sm:min-w-[140px] h-10 sm:h-11 transition hover:bg-[#274C77] ${page === "login" ? "bg-[#274C77]" : "bg-white"}`}
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
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[92px] sm:min-w-[140px] h-10 sm:h-11 transition hover:bg-[#274C77] ${page === "signup" ? "bg-[#274C77]" : "bg-white"}`}
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
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[72px] sm:min-w-[110px] h-10 sm:h-11 transition hover:bg-[#274C77] bg-white`}
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
            Log In
          </h2>

          <div className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 mb-8 w-fit">
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Current Status: Normal
            </span>
          </div>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              onNavigate?.("dashboard");
            }}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2.5 rounded-3xl border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-3xl border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-800">
                  Remember me
                </span>
              </label>
              <a
                href="#forgot"
                className="text-sm text-sky-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-3xl bg-[#274C77] text-white font-semibold uppercase tracking-wide hover:bg-[#1e3a5c] transition"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-sm text-slate-500">or</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-3xl bg-[#274C77] text-white font-medium flex items-center justify-center gap-3 hover:bg-[#1e3a5c] transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#fff"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#fff"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#fff"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
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

export default Login;
