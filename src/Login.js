import "./App.css";

function Login() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 relative">
      {/* Move background: change "45%" (e.g. "20%" = left, "70%" = right) */}
      <div
        aria-hidden
        className="fixed inset-0 bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/landscape-bg.png)",
          backgroundPosition: "45% center",
          // Crop/zoom: "cover" = fill screen (default). Larger = zoom in/crop more: "120%", "150%". Smaller = show more: "80%"
          backgroundSize: "cover",
        }}
      />
      {/* Top bar: logo + branding + nav */}
      <header className="flex items-start justify-between px-8 pt-8 pb-4">
        <div className="flex items-center gap-4">
          {/* CHANGE PICTURE: Replace the <svg> below with <img src="/your-logo.png" alt="Logo" className="w-full h-full object-cover" /> and put your image in public/ */}
          <div className="w-16 h-16 rounded-full border-2 border-emerald-600 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center">
            <svg viewBox="0 0 64 64" className="w-full h-full text-emerald-700">
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <ellipse cx="32" cy="38" rx="18" ry="8" fill="#86efac" />
              <path
                d="M20 38 L24 28 L28 32 L32 26 L36 30 L40 24 L44 38 Z"
                fill="#22c55e"
              />
              <path
                d="M26 28 L28 22 L32 26 L36 20 L40 26 L38 28 Z"
                fill="#15803d"
              />
              <path d="M28 22 L32 18 L36 22 L32 26 Z" fill="#166534" />
              <circle cx="32" cy="14" r="6" fill="#fbbf24" />
              <path
                d="M14 38 L20 32 L26 36 L32 30 L38 34 L44 28 L50 38 L32 48 Z"
                fill="#0ea5e9"
                opacity="0.6"
              />
            </svg>
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
          <a
            href="#login"
            className="rounded-3xl bg-white/95 px-5 py-2.5 shadow-md border border-slate-200/80 text-[#274C77] font-semibold text-lg hover:bg-[#274C77]/10 hover:shadow-lg transition-all"
          >
            Log In
          </a>
          <a
            href="#signup"
            className="rounded-3xl bg-white/95 px-5 py-2.5 shadow-md border border-slate-200/80 text-slate-700 font-semibold text-lg hover:bg-slate-100 hover:text-[#274C77] hover:shadow-lg transition-all"
          >
            Sign Up
          </a>
          <a
            href="#about"
            className="rounded-3xl bg-white/95 px-5 py-2.5 shadow-md border border-slate-200/80 text-slate-700 font-semibold text-lg hover:bg-slate-100 hover:text-[#274C77] hover:shadow-lg transition-all"
          >
            About
          </a>
        </nav>
      </header>

      {/* Main: form left, illustration right */}
      <main className="flex-1 flex min-h-0">
        {/* Left: form */}
        <section className="flex-1 flex flex-col justify-center px-12 lg:px-20 max-w-xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Log In</h2>
          {/* STATUS COLOR: change bg-emerald-500 (e.g. bg-green-500, bg-blue-500, bg-amber-500, bg-red-500) */}
          <div className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 mb-8 w-fit">
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Current Status: Normal
            </span>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-800 mb-1.5"
              >
                Username
              </label>
              {/* ROUNDNESS: use rounded-md, rounded-lg, rounded-xl, etc. (same class on password below) */}
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-3xl border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
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
                className="w-full px-4 py-3 rounded-3xl border-2 border-[#274C77] focus:border-[#274C77] focus:ring-2 focus:ring-[#274C77]/20 outline-none transition text-slate-800 placeholder:text-slate-400"
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

        {/* Right side: your landscape image shows via full-page background */}
        <section className="hidden lg:block flex-1 min-h-[480px]" aria-hidden />
      </main>

      <footer className="px-8 py-4 text-sm text-slate-500">
        <p>© 2025 Barangay Buso-Buso</p>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Login;
