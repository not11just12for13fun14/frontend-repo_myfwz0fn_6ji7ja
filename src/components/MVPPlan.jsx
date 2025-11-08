export default function MVPPlan() {
  const items = [
    {
      title: 'Auth & Dashboards',
      points: [
        'Login/registration with roles',
        'Role-based home screens',
        'Secure sessions'
      ],
    },
    {
      title: 'Attendance & Leave',
      points: [
        'Punch in/out and history',
        'Leave requests with approvals',
        'Balances and carry-forward'
      ],
    },
    {
      title: 'Payroll & Payslips',
      points: [
        'Monthly payrun generation',
        'PF (12%) and professional tax settings',
        'PDF payslips with breakdown'
      ],
    },
    {
      title: 'Admin Overview',
      points: [
        'Key metrics and charts',
        'Exports for audits',
        'Configurable settings'
      ],
    },
  ];

  return (
    <section id="mvp" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">MVP Implementation Plan</h2>
      <p className="mt-2 max-w-3xl text-gray-600">
        A focused 24-hour scope to deliver value fast while laying a scalable foundation.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((card) => (
          <div key={card.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {card.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
