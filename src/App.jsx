import Hero from './components/Hero';
import Modules from './components/Modules';
import Workflow from './components/Workflow';
import MVPPlan from './components/MVPPlan';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
            <span className="text-sm font-semibold">WorkZen HRMS</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#mvp" className="hover:text-gray-900">MVP Plan</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Modules />
        <Workflow />
        <MVPPlan />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} WorkZen HRMS. Built for clarity, compliance, and speed.
        </div>
      </footer>
    </div>
  );
}

export default App;
