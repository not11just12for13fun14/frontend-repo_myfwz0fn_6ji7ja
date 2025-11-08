import { Users, Calendar, Wallet, BarChart3 } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Modules() {
  const [salary, setSalary] = useState(120000);
  const deductions = useMemo(() => {
    const pf = Math.round(salary * 0.12);
    const pt = 200; // sample monthly PT
    const tds = Math.round(Math.max(0, (salary * 0.1) - 5000));
    const net = salary - pf - pt - tds;
    return { pf, pt, tds, net };
  }, [salary]);

  const items = [
    {
      icon: Users,
      title: 'Users & Roles',
      desc: 'SSO, RBAC and audit trails for Admin, HR, Payroll, Employee.'
    },
    {
      icon: Calendar,
      title: 'Attendance & Leave',
      desc: 'Geo-fenced punch-in/out, multi-level approvals and balances.'
    },
    {
      icon: Wallet,
      title: 'Payroll',
      desc: 'Live deduction calculator with PF/PT/TDS for accurate take-home.'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      desc: 'Dashboards, exports and anomaly flags for CFO-grade control.'
    }
  ];

  return (
    <section id="modules" className="relative bg-[#0a0a1f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Core modules</h2>
        <p className="mt-2 max-w-3xl text-white/70">Four precision-engineered pillars that map exactly to Indian payroll operations.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((m) => (
            <div key={m.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <m.icon className="h-5 w-5 text-white/80" />
                <h3 className="font-semibold">{m.title}</h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{m.desc}</p>
              {m.title === 'Payroll' && (
                <div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-4">
                  <label className="flex items-center justify-between text-xs text-white/70">
                    <span>Monthly Gross ₹{salary.toLocaleString('en-IN')}</span>
                    <input type="range" min={20000} max={250000} value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="ml-4 w-40" />
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-md bg-white/5 p-2">PF @12% <span className="float-right font-mono">₹{deductions.pf.toLocaleString('en-IN')}</span></div>
                    <div className="rounded-md bg-white/5 p-2">PT <span className="float-right font-mono">₹{deductions.pt.toLocaleString('en-IN')}</span></div>
                    <div className="rounded-md bg-white/5 p-2">TDS 192 <span className="float-right font-mono">₹{deductions.tds.toLocaleString('en-IN')}</span></div>
                    <div className="rounded-md bg-white/5 p-2">Net <span className="float-right font-mono">₹{deductions.net.toLocaleString('en-IN')}</span></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
