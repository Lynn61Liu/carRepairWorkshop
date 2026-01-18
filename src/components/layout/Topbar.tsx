type Props = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
  onOpenMobile: () => void;
};

export default function Topbar({
  collapsed,
  onToggleCollapsed,
  onOpenMobile,
}: Props) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="flex h-14 items-center gap-2 px-3 md:px-6">
        {/* 移动端：打开抽屉 */}
        <button
          className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 lg:hidden"
          onClick={onOpenMobile}
          aria-label="Open sidebar"
        >
          ☰
        </button>

        {/* 桌面：折叠 sidebar */}
        <button
          className="hidden rounded-lg px-3 py-2 text-sm hover:bg-slate-100 lg:inline-flex"
          onClick={onToggleCollapsed}
          aria-label="Toggle sidebar collapse"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "→" : "←"}
        </button>

        <div className="ml-1 text-sm font-semibold text-slate-900">
          Admin Layout
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <input
              className="h-9 w-64 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
              placeholder="Search..."
            />
          </div>
          <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
            New
          </button>
        </div>
      </div>
    </header>
  );
}
