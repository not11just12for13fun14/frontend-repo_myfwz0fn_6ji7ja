import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Clock, Wallet, BarChart2 } from 'lucide-react';

const headline = 'Streamline HR operations with clarity and control';

function useTypewriter(text, speed = 24) {
  const [out, setOut] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, 1000 / speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

function MagneticCard({ icon: Icon, title, color, delay = 0, orbit = 0 }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * 14;
    const rx = (0.5 - y) * 14;
    setTilt({ rx, ry });
  };

  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{ rotate: orbit }}
      transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      className="pointer-events-auto"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.08 }}
        className="group relative h-36 w-56 rounded-2xl bg-white/6 backdrop-blur-xl ring-1 ring-white/15 shadow-[0_10px_50px_rgba(139,0,255,0.25)]"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60" style={{
            background:
              `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), ${color}33, transparent 55%)`,
          }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-white/0" />
        </div>
        <div className="relative z-10 flex h-full items-center gap-3 px-4">
          <div className="grid place-items-center h-12 w-12 rounded-xl bg-white/10 ring-1 ring-white/20 shadow-inner">
            <Icon className="h-6 w-6 text-white/90" />
          </div>
          <div>
            <p className="text-sm text-white/60">Module</p>
            <p className="text-lg font-semibold tracking-tight text-white">{title}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const controls = useAnimation();
  const subline = useTypewriter('Precision HR for modern teams — compliant, fast, and beautifully simple.', 40);
  const containerRef = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { staggerChildren: 0.02 } });
  }, [controls]);

  // Track mouse for card glow
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const headlineChars = useMemo(() => headline.split(''), []);

  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#0b0b1a] text-white" ref={containerRef}>
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Nebula/gradient overlays - pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70">
        <div className="absolute -left-40 top-1/4 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,0,255,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute right-0 top-10 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,247,255,0.28),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(88,101,242,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center">
        {/* Headline with liquid gradient text and subtle per-letter motion */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
          style={{
            background:
              'linear-gradient(120deg, #ffffff 0%, #c9b6ff 20%, #8B00FF 40%, #00f7ff 70%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 10px 40px rgba(139,0,255,0.35))',
          }}
        >
          {headlineChars.map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.04 * i, type: 'spring', stiffness: 300, damping: 20 }}
            >
              {c}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subline with subtle glitch/typing effect */}
        <AnimatePresence>
          <motion.p
            key={subline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.9, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            style={{ textShadow: '0 0 10px rgba(139,0,255,0.28)' }}
          >
            {subline}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#modules"
            whileHover={{ scale: 1.06, boxShadow: '0 20px 60px rgba(139,0,255,0.45)' }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-xl"
            style={{
              background:
                'radial-gradient(120%_120%_at_30%_30%, rgba(255,255,255,0.18), rgba(255,255,255,0.08)), linear-gradient(120deg, rgba(139,0,255,0.5), rgba(0,247,255,0.35))',
            }}
          >
            Explore Modules
          </motion.a>
          <motion.a
            href="#mvp"
            whileHover={{ scale: 1.06, boxShadow: '0 20px 60px rgba(0,247,255,0.45)' }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-[#0b0b1a] ring-1 ring-white/10"
            style={{ background: 'linear-gradient(120deg,#00f7ff,#8B00FF)' }}
          >
            View MVP Plan
          </motion.a>
        </div>

        {/* Orbiting module cards around a central invisible orbit */}
        <div className="pointer-events-none relative mt-16 h-[380px] w-full max-w-4xl">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)] blur-xl" />

          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="pointer-events-none h-72 w-72 rounded-full border border-white/10" />
          </div>

          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-72 w-72">
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <MagneticCard icon={Clock} title="Attendance" color="#8B00FF" orbit={0} />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <MagneticCard icon={Rocket} title="Leave" color="#00f7ff" orbit={90} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <MagneticCard icon={Wallet} title="Payroll" color="#5865F2" orbit={180} />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <MagneticCard icon={BarChart2} title="Analytics" color="#8B00FF" orbit={270} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
