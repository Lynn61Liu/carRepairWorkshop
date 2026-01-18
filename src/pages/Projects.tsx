export default function Projects() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-900">Jobs</h1>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <ul className="space-y-2 text-sm text-slate-700">
          {["NZAT ERP MVP", "Coffee Stamp App", "Healthy Lunchbox Builder"].map(
            (p) => (
              <li
                key={p}
                className="rounded-xl border border-slate-200 p-3 hover:bg-slate-50"
              >
                {p}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
