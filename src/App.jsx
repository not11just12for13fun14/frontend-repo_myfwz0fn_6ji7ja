import Hero from './components/Hero';
import Modules from './components/Modules';
import Workflow from './components/Workflow';
import MVPPlan from './components/MVPPlan';
import { useEffect, useState } from 'react';

function App() {
  const [solidNav, setSolidNav] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b1a] text-white antialiased selection:bg-fuchsia-500/30 selection:text-white">
      <header className={`sticky top-0 z-30 transition-colors ${solidNav ? 'bg-[#0b0b1a]/70 backdrop-blur-xl ring-1 ring-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-cyan-400 text-xs font-black">WZ</span>
            <span className="text-sm font-semibold tracking-wide text-white/90">WorkZen HRMS</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#modules" className="hover:text-white">Modules</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#mvp" className="hover:text-white">MVP Plan</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Modules />
        <Workflow />
        <MVPPlan />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} WorkZen HRMS — Built for clarity, compliance, and speed.
        </div>
      </footer>
    </div>
  );
}

export default App;
