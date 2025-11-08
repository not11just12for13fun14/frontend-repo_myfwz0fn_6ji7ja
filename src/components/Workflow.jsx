import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BadgeCheck, CalendarCheck2, Clock4, FileSpreadsheet, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Workflow() {
  const [time, setTime] = useState(() => new Date());
  const [requests, setRequests] = useState(7);
  const [amount, setAmount] = useState(14285000);
  const pipeRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    const a = setInterval(() => setAmount((v) => v + Math.round(1000 + Math.random() * 5000)), 80);
    return () => { clearInterval(t); clearInterval(a); };
  }, []);

  useEffect(() => {
    const r = setInterval(() => setRequests((n) => (n % 12) + 1), 4000);
    return () => clearInterval(r);
  }, []);

  const fmt = (n) => n.toLocaleString('en-IN');

  return (
    <section id="workflow" className="relative bg-[#0b0b1a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">From punch-in to bank credit in 42 seconds</h2>
        <p className="mt-2 max-w-3xl text-white/70">Five crystalline stages connected by a glowing pipeline that pulses with activity.</p>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-5">
          {/* Attendance */}
          <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-blue-400">
              <Clock4 className="h-5 w-5" /> <span className="font-semibold">Attendance</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Live clock</p>
            <div className="mt-3 text-xl font-mono tabular-nums">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          </motion.div>

          <ArrowRight className="mx-auto hidden h-6 w-6 text-white/30 lg:block" />

          {/* Leave */}
          <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-400">
              <CalendarCheck2 className="h-5 w-5" /> <span className="font-semibold">Leave Approval</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Pending requests</p>
            <div className="mt-3 text-xl font-mono tabular-nums">{requests} requests</div>
          </motion.div>

          <ArrowRight className="mx-auto hidden h-6 w-6 text-white/30 lg:block" />

          {/* Payrun */}
          <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-emerald-400">
              <FileSpreadsheet className="h-5 w-5" /> <span className="font-semibold">Payrun Engine</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Processing now…</p>
            <div className="mt-3 text-xl font-mono tabular-nums">₹{fmt(amount)} processing…</div>
          </motion.div>

          <ArrowRight className="mx-auto hidden h-6 w-6 text-white/30 lg:block" />

          {/* Payslips */}
          <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-fuchsia-400">
              <BadgeCheck className="h-5 w-5" /> <span className="font-semibold">PDF Payslips</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Generated securely</p>
            <div className="mt-3 text-xs text-white/60">Sample PDFs available on request</div>
          </motion.div>

          <ArrowRight className="mx-auto hidden h-6 w-6 text-white/30 lg:block" />

          {/* Locked */}
          <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-blue-300">
              <Lock className="h-5 w-5" /> <span className="font-semibold">Locked Vault</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Immutable payrun</p>
            <div className="mt-3 text-xs text-white/60">Audit-ready, tamper-proof</div>
          </motion.div>
        </div>

        {/* Glowing pipeline */}
        <div ref={pipeRef} className="pointer-events-none mx-auto mt-10 h-1 w-full max-w-5xl overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-[pulseMove_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#0061ff] to-transparent" />
        </div>
        <style>{`
          @keyframes pulseMove { 0% { transform: translateX(-100%);} 50% { transform: translateX(100%);} 100% { transform: translateX(300%);} }
        `}</style>
      </div>
    </section>
  );
}
