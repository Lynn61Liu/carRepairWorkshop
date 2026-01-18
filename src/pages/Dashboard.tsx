export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        {["Users", "Revenue", "Errors"].map((t) => (
          <div
            key={t}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <div className="text-sm text-slate-500">{t}</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">
              {Math.floor(Math.random() * 900) + 100}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-semibold text-slate-900">Overview</div>
        <p className="mt-2 text-sm text-slate-600">
          这是一个示例后台布局：左侧 Sidebar，顶部 Topbar，右侧内容区可滚动。
        </p>
      </div>
    </div>
  );
}
