import { Rocket, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
              <Rocket className="h-3.5 w-3.5" />
              WorkZen HRMS
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Streamline HR operations with clarity and control
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-600">
              A comprehensive Human Resource Management System that unifies attendance, leave, payroll, and analytics into a single, secure, and intuitive platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#modules" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
                Explore Modules
              </a>
              <a href="#mvp" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                View MVP Plan
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-gray-600 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-indigo-600" />
                Secure by design
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-indigo-600" />
                Actionable analytics
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                Policy compliant
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-indigo-50 p-4">
                  <p className="text-xs font-medium text-indigo-600">Attendance</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-900">Punch In/Out</p>
                  <p className="mt-2 text-xs text-indigo-700">Daily, reliable, auditable</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs font-medium text-emerald-600">Payroll</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-900">Auto Payruns</p>
                  <p className="mt-2 text-xs text-emerald-700">PF & tax rules baked in</p>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-xs font-medium text-amber-600">Leave</p>
                  <p className="mt-1 text-2xl font-bold text-amber-900">Smart Approvals</p>
                  <p className="mt-2 text-xs text-amber-700">Balances & policies</p>
                </div>
                <div className="rounded-xl bg-fuchsia-50 p-4">
                  <p className="text-xs font-medium text-fuchsia-600">Analytics</p>
                  <p className="mt-1 text-2xl font-bold text-fuchsia-900">Insights</p>
                  <p className="mt-2 text-xs text-fuchsia-700">Trends & exports</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-fuchsia-200/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
