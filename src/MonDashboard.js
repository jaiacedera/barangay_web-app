import { useState } from "react";
import "./App.css";

export default function MonDashboard({ onNavigate, page }) {
  const [confirmSignOut, setConfirmSignOut] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col font-sans text-slate-800 relative">
      <div
        aria-hidden
        className="fixed inset-0 bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/landscape-bg.png)",
          backgroundPosition: "45% center",
          backgroundSize: "cover",
        }}
      />

      <header className="flex items-center justify-between px-4 sm:px-8 py-3">
        <div className="flex items-center gap-4">
          {/* mobile menu button - appears when sidebar is hidden (below lg) */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md bg-white shadow-sm"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-5 h-5 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-emerald-600 overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/buso%20buso%20logo%20.png"
              alt="Barangay Buso-Buso logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 tracking-wide">
              LAUREL, BATANGAS
            </p>
            <h1 className="text-lg font-bold text-slate-800">
              Barangay Buso-Buso
            </h1>
            <p className="text-xs text-slate-600">EOC Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[110px] sm:min-w-[140px] h-10 sm:h-11 transition hover:bg-[#274C77] ${page === "dashboard" ? "bg-[#274C77]" : "bg-white"}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("dashboard");
              }}
              className={`w-full h-full flex items-center justify-center font-semibold text-sm sm:text-lg ${page === "dashboard" ? "text-white" : "text-[#274C77]"} group-hover:text-white`}
            >
              Dashboard
            </button>
          </div>

          <div
            className={`group rounded-3xl shadow-md border border-[#274C77] overflow-hidden min-w-[110px] sm:min-w-[140px] h-10 sm:h-11 transition hover:bg-[#274C77] bg-white`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setConfirmSignOut(true);
              }}
              className="w-full h-full flex items-center justify-center font-semibold text-sm sm:text-lg text-slate-700 group-hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay nav - overlaps content when open (hidden on lg+) */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="absolute top-20 left-4 w-64 bg-white rounded-2xl shadow-xl p-4 animate-slide-in">
            <nav className="flex flex-col gap-2">
              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#274C77] text-white font-semibold shadow-md"
                onClick={() => {
                  setMobileNavOpen(false);
                  onNavigate?.("dashboard");
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <span>Dashboard</span>
              </button>

              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  setMobileNavOpen(false);
                  onNavigate?.("sensors");
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 4v16M4 12h16" />
                </svg>
                <span>Sensors</span>
              </button>

              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  setMobileNavOpen(false);
                  onNavigate?.("calamity-reports");
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <span>Calamity Reports</span>
              </button>

              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  setMobileNavOpen(false);
                  onNavigate?.("citizen-request");
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <span>Citizen Request</span>
              </button>

              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 mt-3 border-t pt-3"
                onClick={() => {
                  setMobileNavOpen(false);
                  onNavigate?.("settings");
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 2v20" />
                </svg>
                <span>Setting</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1 flex min-h-0 px-4 sm:px-8 lg:px-12 lg:overflow-auto lg:max-h-[calc(100vh-96px)]">
        {/* Left vertical nav */}
        <aside className="hidden lg:flex lg:flex-col w-64 pr-6">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="bg-white/30 backdrop-blur rounded-3xl p-3">
                <nav className="flex flex-col gap-3">
                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#274C77] text-white font-semibold shadow-md">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    <span>Dashboard</span>
                  </button>

                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                    <span>Sensors</span>
                  </button>

                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                    <span>Calamity Reports</span>
                  </button>

                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                    <span>Citizen Request</span>
                  </button>
                </nav>
              </div>
            </div>

            <div />
            <div className="mb-4">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 mb-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 2v20" />
                </svg>
                <span>Setting</span>
              </button>
              <div className="mt-2 text-sm text-slate-500">
                <p>© 2025 Barangay Buso-Buso</p>
                <p>All Rights Reserved</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Center + Right columns */}
        <section className="flex-1 overflow-auto lg:max-h-[calc(100vh-96px)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
            CONTROL CENTER{" "}
            <span className="text-emerald-600 text-base font-semibold">
              [live]
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md min-h-[100px]">
                <h3 className="font-semibold text-slate-700">
                  Volcanic Smog Levels
                </h3>
                <p className="text-slate-500 mt-2">SO2: 8.9 ppm</p>
                <p className="text-red-600 font-semibold mt-3">
                  CRITICAL ALERT
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md min-h-[100px]">
                <h3 className="font-semibold text-slate-700">Landslide</h3>
                <p className="text-slate-500 mt-2">Rain Rate = 80%</p>
                <p className="text-red-600 font-semibold mt-3">HIGH RISK</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-md min-h-[80px]">
                <h3 className="font-semibold text-slate-700">
                  Typhoon / Flood
                </h3>
                <p className="text-slate-500 mt-2">
                  Rain Rate, Temp &amp; Humidity
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md min-h-[100px]">
                <h3 className="font-semibold text-slate-700">Earthquake</h3>
                <p className="text-slate-500 mt-2">Seismic activity nominal</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-md lg:col-span-2">
                <h3 className="font-semibold text-slate-700 mb-3">
                  News & Events
                </h3>
                <div className="h-40 bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src="/landscape-bg.png"
                    alt="news"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-red-600 text-white rounded-2xl p-6 shadow-xl min-h-[160px] flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold">ACTIVE ALERTS STREAM</h4>
                  <p className="mt-3 text-sm">
                    ALERT: SULFUR LEVELS RISING. ADVISORY
                  </p>
                  <p className="mt-2 text-sm">
                    ALERT: TAAL VOLCANO ASHFALL. EVACUATE
                  </p>
                </div>
                <div className="text-right opacity-90">&nbsp;</div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-md">
                <h4 className="font-semibold text-slate-700">Siren Override</h4>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-slate-600">Siren</span>
                  <div className="w-12 h-6 bg-slate-200 rounded-full flex items-center p-1">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto shadow" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-md">
                <h4 className="font-semibold text-slate-700">
                  NOTIFICATION MESSAGE SENDER
                </h4>
                <p className="text-sm text-slate-500 mt-2">
                  Evacuate Now to [site]. Immediate evacuation due to volcanic
                  ashfall. Proceed to the nearest Evacuation Center.
                </p>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full">
                  SEND
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* footer moved into left sidebar for better proximity to setting */}

      {confirmSignOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setConfirmSignOut(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-md">
            <h3 className="text-lg font-semibold text-slate-800">
              Are you sure you want to sign out?
            </h3>
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-3xl bg-slate-200"
                onClick={() => setConfirmSignOut(false)}
              >
                No
              </button>
              <button
                className="px-4 py-2 rounded-3xl bg-[#274C77] text-white"
                onClick={() => {
                  setConfirmSignOut(false);
                  onNavigate?.("login");
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
