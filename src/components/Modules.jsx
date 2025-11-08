import { Users, ClipboardCheck, Wallet, PieChart } from 'lucide-react';

const modules = [
  {
    icon: Users,
    title: 'User & Roles',
    desc: 'Secure authentication with role-based access for Admin, HR, Payroll, and Employees.'
  },
  {
    icon: ClipboardCheck,
    title: 'Attendance & Leave',
    desc: 'Punch in/out, view history, apply for leave, and track approvals with balances.'
  },
  {
    icon: Wallet,
    title: 'Payroll',
    desc: 'Automatic payruns with PF (12%) and professional tax, plus payslip PDFs.'
  },
  {
    icon: PieChart,
    title: 'Analytics',
    desc: 'Dashboards for trends, distribution, costs, and exportable reports.'
  }
];

export default function Modules() {
  return (
    <section id="modules" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Core Modules</h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        Four pillars drive WorkZen HRMS — each designed with a clear responsibility and straightforward workflows.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <div key={m.title} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <m.icon className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-900">{m.title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
