import Hero from './components/Hero';
import Modules from './components/Modules';
import Workflow from './components/Workflow';
import MVPPlan from './components/MVPPlan';
import { useEffect, useRef, useState } from 'react';

function useScrollSolid(threshold = 24) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return solid;
}

export default function App() {
  const solidNav = useScrollSolid(24);
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const el = cursorRef.current;
    if (!el) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;

    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  // Easter egg: type CA to show compliance overlay
  const [showCA, setShowCA] = useState(false);
  useEffect(() => {
    let seq = '';
    const onKey = (e) => {
      seq = (seq + e.key.toUpperCase()).slice(-2);
      if (seq === 'CA') {
        setShowCA(true);
        setTimeout(() => setShowCA(false), 500);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Custom cursor (desktop only) */}
      {!isMobile && (
        <div ref={cursorRef} className="pointer-events-none fixed z-[60] hidden select-none md:block" aria-hidden>
          <div className="grid h-3 w-3 place-items-center rounded-sm bg-white/90 text-[8px] font-black leading-none text-[#0a0a1f] shadow-[0_0_20px_rgba(0,97,255,0.6)]">
            WZ
          </div>
        </div>
      )}

      {/* CA overlay */}
      {showCA && (
        <div className="pointer-events-none fixed inset-0 z-50 grid place-items-center bg-emerald-500/80 backdrop-blur-sm">
          <div className="rounded-lg border border-white/20 bg-black/40 px-6 py-4 text-center text-sm font-semibold tracking-wide">
            Section 192 | Rule 21A | Form 24Q | PF Act 1952 Section 6
          </div>
        </div>
      )}

      <header className={`sticky top-0 z-40 transition-colors ${solidNav ? 'bg-[#0a0a1f]/80 backdrop-blur-xl ring-1 ring-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center rounded-[6px] bg-[#0061ff] text-[10px] font-black text-white">WZ</span>
            <span className="text-sm font-semibold tracking-wide text-white/90">WorkZen HRMS</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#mvp" className="hover:text-white">MVP</a>
            <a href="#modules" className="hover:text-white">Modules</a>
          </nav>
          <a href="#start" className="hidden rounded-lg bg-gradient-to-br from-[#00c853] to-[#00c853]/70 px-3 py-1.5 text-xs font-semibold text-[#0a0a1f] ring-1 ring-white/10 sm:inline-block">
            Start Free
          </a>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Workflow />
        <MVPPlan />
        <Modules />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0a1f]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="text-center text-sm text-white/60">
            ₹127+ crore payroll processed monthly • 47 companies • 12,847 employees • Zero compliance failures since 2024
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-80">
            <span>FinTechCo</span>
            <span>GrowEasy</span>
            <span>NexusBank</span>
            <span>BharatPay</span>
            <span>TrustBank</span>
            <span>AuditSafe</span>
          </div>
          <div className="mt-8 text-center">
            <a href="#start" className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10">
              Start free → No credit card • 500 employees free forever
            </a>
          </div>
          <div className="mt-8 text-center text-xs text-white/40">© {new Date().getFullYear()} WorkZen HRMS</div>
        </div>
      </footer>
    </div>
  );
}
