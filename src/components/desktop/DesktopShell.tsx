'use client';

import { useRef, useState } from 'react';
import { StarburstSharp } from './Starbursts';
import Clock from './Clock';
import LeftRail from './LeftRail';
import Window, { TabId } from './Window';
import IconGrid from './IconGrid';
import Dock from './Dock';

const TICKER = [
  'gm',
  'build in public',
  'read the audit',
  'wagmi',
  'EIP-712',
  'not financial advice',
  'monosemanticity',
  'ship > talk',
  'zk everything',
  'gas: optimized',
];

export default function DesktopShell() {
  const [tab, setTab] = useState<TabId>('about');
  const shellRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* menu bar */}
      <header className="z-20 flex h-11 shrink-0 items-center justify-between border-b border-line/60 bg-desk/80 px-4 text-xs backdrop-blur">
        <div className="flex items-center gap-2 font-bold tracking-widest text-ink">
          <StarburstSharp className="h-4 w-4" />
          <span>UTKARSH — DESKTOP</span>
        </div>
        <div className="flex items-center gap-4 text-dim">
          <span className="hidden sm:inline">guwahati, in</span>
          <Clock className="text-mut" />
          <span className="rounded-full border border-line px-3 py-1 text-mut">
            gm <span className="text-neon-lime">●</span>
          </span>
        </div>
      </header>

      {/* desktop surface */}
      <div
        ref={shellRef}
        className="relative z-10 flex flex-1 flex-col gap-10 px-5 py-8 lg:flex-row lg:items-start lg:gap-8 lg:px-10 lg:py-10"
      >
        {/* ambient color blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-neon-pink/[0.06] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-neon-sky/[0.05] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-neon-violet/[0.05] blur-3xl"
        />

        <aside className="shrink-0 lg:w-[320px]">
          <LeftRail />
        </aside>

        <main className="min-w-0 flex-1 pb-32 lg:pt-6">
          <Window tab={tab} setTab={setTab} dragArea={shellRef} />
        </main>

        <aside className="shrink-0 pb-32 lg:w-auto lg:pt-6">
          <IconGrid onProjects={() => setTab('projects')} />
        </aside>
      </div>

      <Dock setTab={setTab} />

      {/* bottom ticker */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 overflow-hidden border-t border-line/60 bg-desk/90 py-1.5 text-[11px] tracking-widest text-dim backdrop-blur"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0 gap-12">
              {TICKER.map((t, i) => (
                <span key={t}>
                  <span
                    className={
                      i % 3 === 0
                        ? 'text-neon-pink/70'
                        : i % 3 === 1
                          ? 'text-neon-lime/60'
                          : 'text-neon-sky/60'
                    }
                  >
                    ✳
                  </span>{' '}
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
