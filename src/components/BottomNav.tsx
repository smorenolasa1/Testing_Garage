import { NavLink } from "react-router-dom";
import { HelpIcon, HistoryIcon, HomeIcon } from "./Icons";
import { classNames } from "../lib/utils";

const navItems = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/history", label: "History", icon: HistoryIcon },
  { to: "/help", label: "Help", icon: HelpIcon },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-[430px] -translate-x-1/2 border-t border-white/70 bg-white/95 px-6 pb-8 pt-4 backdrop-blur">
      <ul className="grid grid-cols-3 gap-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  "flex min-h-[60px] flex-col items-center justify-center gap-1 rounded-2xl text-xs font-semibold transition",
                  isActive ? "bg-brand-50 text-brand-700" : "text-body hover:bg-slate-50",
                )
              }
              to={to}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
