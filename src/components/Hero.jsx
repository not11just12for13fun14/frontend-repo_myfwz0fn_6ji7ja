import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const headline = 'Zero payroll errors. Ever.\nPF @12% • Professional Tax • TDS 192 • Form-16 • 24Q • Locked payruns.';

function useTypewriter(text, cps = 40) {
  const [out, setOut] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 1000 / cps);
    return () => clearInterval(id);
  }, [text, cps]);
  return out;
}

function Marquee() {
  const items = [
    'PF ECR Ready', 'ESI Monthly Return', 'Professional Tax Slab Auto', 'TDS 24Q', 'Form-16 Part A&B', 'LWF Karnataka', 'Bonus Act', 'Gratuity', 'ISO 27001'
  ];
  return (
    <div className="relative mt-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a1f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0a1f] to-transparent" />
      <div className="flex w-max animate-[scroll_22s_linear_infinite] gap-10 whitespace-nowrap text-sm text-white/80 [--distance:50%]">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="hover:text-white">← {t} →</span>
        ))}
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(headline, 70);
  const containerRef = useRef(null);

  // track mouse for soft light
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const lines = useMemo(() => typed.split('\n'), [typed]);

  return (
    <section ref={containerRef} className="relative isolate min-h-[100vh] overflow-hidden bg-[#0a0a1f] text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* overlays should not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0">
        {/* encrypted data noise/particles feel */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, #ffffff 1px, transparent 1px), radial-gradient(circle at 60% 80%, #ffffff 1px, transparent 1px)',
          backgroundSize: '120px 120px, 160px 160px'
        }} />
        {/* soft moving light tied to mouse */}
        <div className="absolute inset-0 opacity-60" style={{
          background: 'radial-gradient(500px 500px at var(--mx,50%) var(--my,50%), rgba(0,97,255,0.18), transparent 60%)'
        }} />
        {/* brand gradients */}
        <div className="absolute -left-40 top-1/4 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,97,255,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute right-0 top-10 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,200,83,0.22),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,109,0,0.18),transparent_60%)] blur-3xl" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
          Indian Statutory Compliance • Built for CAs & CFOs
        </div>

        <div className="mt-6 max-w-5xl">
          {lines.map((line, idx) => (
            <motion.h1
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className={`text-4xl font-extrabold leading-tight tracking-wide md:text-6xl ${idx === 0 ? 'text-white' : 'text-white/90'}`}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        <AnimatePresence>
          {typed === headline && (
            <motion.p
              key="sub"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.9, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              The only HRMS in India that CAs actually trust.
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-[#0a0a1f] ring-1 ring-white/10"
            style={{ background: 'linear-gradient(120deg,#00c853,#00c853)' }}
          >
            Start Free → 500 employees forever
          </motion.a>
          <motion.a
            href="#checklist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-xl"
            style={{
              background:
                'radial-gradient(120%_120%_at_30%_30%, rgba(255,255,255,0.14), rgba(255,255,255,0.06))'
            }}
          >
            Download Statutory Compliance Checklist
          </motion.a>
        </div>

        {/* Live compliance marquee */}
        <Marquee />
      </div>
    </section>
  );
}
