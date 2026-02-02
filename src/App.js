import "./App.css";

function App() {
  return (
    /* This 'min-h-screen' and 'bg-slate-900' will fill the whole page with a dark theme */
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Main Container for your Dashboard */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-10 border-b border-slate-700 pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-500">
            Barangay Admin Portal
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            Software Development Phase: System Monitoring & Integration
          </p>
        </header>

        {/* Feature Grid based on your Thesis Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Seismic Monitoring Card */}
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">
              Seismic Monitoring
            </h2>
            <div className="h-24 bg-slate-900 rounded flex items-center justify-center text-xs font-mono">
              [PHIVOLCS_DATA_STREAM: WAITING...]
            </div>
          </div>

          {/* Distress Signal Hub */}
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 text-orange-400">
              Distress Signals
            </h2>
            <p className="text-sm text-slate-400">
              Listening for Random Forest Classifier triggers...
            </p>
          </div>

          {/* AI Chatbot Assistant */}
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">
              AI Chatbot
            </h2>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              Open Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
