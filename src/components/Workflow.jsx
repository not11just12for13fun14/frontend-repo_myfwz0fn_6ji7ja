import { ArrowRight, BadgeCheck, CalendarCheck2, Clock4, FileSpreadsheet } from 'lucide-react';

export default function Workflow() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Workflow at a Glance</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          From attendance to payroll, the flow is streamlined and auditable. Approvals ensure compliance, and payruns lock for accuracy.
        </p>
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-5">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600">
              <Clock4 className="h-5 w-5" />
              <span className="font-semibold">Attendance</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Employees punch in/out. Corrections go through review.</p>
          </div>
          <ArrowRight className="mx-auto hidden h-6 w-6 text-gray-400 lg:block" />
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-amber-600">
              <CalendarCheck2 className="h-5 w-5" />
              <span className="font-semibold">Leaves</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Requests are approved/rejected by HR or Payroll.</p>
          </div>
          <ArrowRight className="mx-auto hidden h-6 w-6 text-gray-400 lg:block" />
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600">
              <FileSpreadsheet className="h-5 w-5" />
              <span className="font-semibold">Payrun</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Attendance and approved leaves compute gross, PF, tax, and net.</p>
          </div>
          <ArrowRight className="mx-auto hidden h-6 w-6 text-gray-400 lg:block" />
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-fuchsia-600">
              <BadgeCheck className="h-5 w-5" />
              <span className="font-semibold">Payslips</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">PDFs are generated, verified, and shared with employees.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
