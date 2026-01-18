import { NavLink } from "react-router-dom";

export type NavItem = {
  label: string;
  to: string;
  icon?: string; 
};

type Props = {
  items: NavItem[];
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

export default function Sidebar({
  items,
  collapsed,
  mobileOpen,
  onCloseMobile,
}: Props) {
  const widthClass = collapsed ? "w-16" : "w-64";

  return (
    <aside
      className={[
        "fixed inset-y-0 left-0 z-40 lg:static",
        "bg-white border-r border-slate-200",
        "transition-all duration-200 ease-in-out",
        widthClass,
      
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      ].join(" ")}
    >
      <div className="flex h-full flex-col">
      
        <div className="flex h-14 items-center gap-2 px-3 border-b border-slate-200">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gray-900 text-white">
            Logo
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-slate-900">
                 Admin Panel
              </div>
              <div className="truncate text-xs text-slate-500">
                Demo App
              </div>
            </div>
          )}

          <div className="ml-auto lg:hidden">
            <button
              className="rounded-lg px-2 py-1 text-sm hover:bg-slate-100"
              onClick={onCloseMobile}
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    [
                      "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm",
                      "transition-colors",
                      isActive
                        ? "bg-red-500 text-white"
                        : "text-slate-700 hover:bg-slate-100",
                    ].join(" ")
                  }
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-green-900 group-[.active]:bg-white/20 group-[.active]:text-white">
                    {item.icon ?? "•"}
                  </span>

                  {!collapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-2">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs text-slate-600">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100">
              🙂
            </span>
            {!collapsed && (
              <div className="min-w-0">
                <div className="truncate font-medium text-slate-800">
                  Signed in
                </div>
                <div className="truncate text-slate-500">yinliu@example.com</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
