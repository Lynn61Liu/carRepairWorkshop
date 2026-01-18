import { useCallback, useState } from "react";

export type SidebarLayoutState = {
  collapsed: boolean;
  mobileOpen: boolean;
  toggleCollapsed: () => void;
  openMobile: () => void;
  closeMobile: () => void;
  toggleMobile: () => void;
};

export function useSidebarLayout(
  initial?: Partial<Pick<SidebarLayoutState, "collapsed" | "mobileOpen">>
): SidebarLayoutState {
  const [collapsed, setCollapsed] = useState(initial?.collapsed ?? false);
  const [mobileOpen, setMobileOpen] = useState(initial?.mobileOpen ?? false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((v) => !v);
  }, []);

  const openMobile = useCallback(() => {
    setMobileOpen(true);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((v) => !v);
  }, []);

  return {
    collapsed,
    mobileOpen,
    toggleCollapsed,
    openMobile,
    closeMobile,
    toggleMobile,
  };
}
