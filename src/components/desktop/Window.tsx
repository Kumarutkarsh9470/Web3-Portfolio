'use client';

import { RefObject } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { DesktopTab, ProjectsTab, AboutTab, ContactTab } from './WindowContent';

export type TabId = 'desktop' | 'projects' | 'about' | 'contact';

const TABS: { id: TabId; label: string }[] = [
  { id: 'desktop', label: 'Desktop' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const TITLES: Record<TabId, string> = {
  desktop: 'Desktop/',
  projects: 'Projects/',
  about: 'About/',
  contact: 'Contact/',
};

interface WindowProps {
  tab: TabId;
  setTab: (t: TabId) => void;
  dragArea: RefObject<HTMLDivElement | null>;
}

export default function Window({ tab, setTab, dragArea }: WindowProps) {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragConstraints={dragArea}
      className="relative z-10 mx-auto flex w-full max-w-3xl overflow-hidden rounded-xl border border-line bg-panel shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
    >
      {/* sidebar */}
      <nav
        className="hidden w-40 shrink-0 flex-col border-r border-line bg-panel-2/60 sm:flex"
        aria-label="Window navigation"
      >
        <div
          className="flex h-10 cursor-grab items-center px-4 active:cursor-grabbing"
          onPointerDown={(e) => controls.start(e)}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true" />
        </div>
        <ul className="mt-4 space-y-1 px-2 text-[13px]">
          {TABS.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-left transition-colors ${
                  tab === t.id
                    ? 'text-ink'
                    : 'text-dim hover:bg-panel-2 hover:text-mut'
                }`}
                aria-current={tab === t.id ? 'page' : undefined}
              >
                <span
                  className={`inline-block h-2.5 w-2.5 border ${
                    tab === t.id ? 'border-ink bg-ink' : 'border-dim'
                  }`}
                  aria-hidden="true"
                />
                {t.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-auto px-4 pb-4 font-display text-[11px] uppercase leading-tight tracking-widest text-line">
          KU
          <br />
          Explorer
          <br />
          2026
        </p>
      </nav>

      {/* main pane */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* titlebar */}
        <div
          className="flex h-10 shrink-0 cursor-grab items-center gap-3 border-b border-line px-4 active:cursor-grabbing"
          onPointerDown={(e) => controls.start(e)}
        >
          <span className="text-dim" aria-hidden="true">
            ‹ ›
          </span>
          <span className="text-xs text-mut">{TITLES[tab]}</span>
        </div>

        {/* mobile tab strip */}
        <div className="flex gap-1 border-b border-line px-2 py-2 sm:hidden">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded px-2.5 py-1 text-xs transition-colors ${
                tab === t.id ? 'bg-panel-2 text-ink' : 'text-dim'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="min-h-[420px] flex-1 overflow-y-auto p-5 sm:max-h-[56vh] sm:p-7">
          {tab === 'desktop' && <DesktopTab />}
          {tab === 'projects' && <ProjectsTab />}
          {tab === 'about' && <AboutTab />}
          {tab === 'contact' && <ContactTab />}
        </div>
      </div>
    </motion.div>
  );
}
