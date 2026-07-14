'use client';

import { useActiveSection } from '@/hooks/useActiveSection';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
];

export default function Navigation() {
  const activeSection = useActiveSection();

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <a
                className="group flex items-center py-3"
                href={item.href}
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    isActive
                      ? 'w-16 bg-slate-200'
                      : 'w-8 bg-slate-600'
                  }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    isActive ? 'text-slate-200' : 'text-slate-500'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
