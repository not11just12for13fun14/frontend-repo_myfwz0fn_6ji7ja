export default function MVPPlan() {
  const items = [
    {
      title: 'Auth & Role Dashboards',
      color: 'text-emerald-400',
      bullets: [
        'Role-based SSO (Admin, HR, Payroll, Employee)',
        'Session security with device binding',
        'Audit trails for every critical action'
      ]
    },
    {
      title: 'Attendance & Leave',
      color: 'text-amber-400',
      bullets: [
        'Real-time punch-in/out with geo-fencing',
        'Multi-level leave approvals',
        'Carry forward and encashment rules'
      ]
    },
    {
      title: 'Payroll & Payslips',
      color: 'text-fuchsia-400',
      bullets: [
        'PF @12%, PT slabs, LWF, ESI configuration',
        'TDS Section 192 engine with Chapter VI-A deductions',
        'PDF payslips with QR & tamper seal'
      ]
    },
    {
      title: 'Admin Overview',
      color: 'text-blue-300',
      bullets: [
        'Org-wide metrics and anomaly flags',
        'Exports for audits (24Q, 27Q, Form-16)',
        'Immutable locked payruns'
      ]
    }
  ];

  return (
    <section id="mvp" className="relative bg-[#0a0a1f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">MVP: 24-hour implementation scope</h2>
        <p className="mt-2 max-w-3xl text-white/70">A secure server-rack themed roadmap. Each blade mirrors production constraints and audit expectations.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className={`text-sm font-semibold ${item.color}`}>{item.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,97,255,0.25),transparent_60%)] blur-2xl transition-transform group-hover:translate-x-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
