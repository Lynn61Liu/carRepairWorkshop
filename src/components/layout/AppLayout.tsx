import { Outlet } from "react-router-dom";
import { useMemo } from "react";
import Sidebar, { type NavItem } from "./Sidebar";
import Topbar from "./Topbar";
import { useSidebarLayout } from "../../hooks/useSidebarLayout";

export default function AppLayout() {
  const { collapsed, mobileOpen, toggleCollapsed, openMobile, closeMobile } =
    useSidebarLayout({ collapsed: false, mobileOpen: false });

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Dashboard", to: "/dashboard", icon: "📊" },
      { label: "Jobs", to: "/projects", icon: "📁" },
    //   { label: "Settings", to: "/settings", icon: "⚙️" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {mobileOpen && (
        <button
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={closeMobile}
        />
      )}

      <div className="flex min-h-screen">
        <Sidebar
          items={navItems}
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onCloseMobile={closeMobile}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar
            collapsed={collapsed}
            onToggleCollapsed={toggleCollapsed}
            onOpenMobile={openMobile}
          />

          <main className="flex-1 min-w-0 p-4 md:p-6">
            <div className="mx-auto w-full max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
