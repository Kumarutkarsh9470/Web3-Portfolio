'use client';

import { Asterisk, StarburstSmile } from './Starbursts';
import type { TabId } from './Window';

interface DockProps {
  setTab: (t: TabId) => void;
}

const dockTile =
  'flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-panel/90 backdrop-blur transition-all hover:-translate-y-1 hover:border-dim';

export default function Dock({ setTab }: DockProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-8 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex items-stretch gap-2">
        <button
          type="button"
          onClick={() => setTab('desktop')}
          className={dockTile}
          aria-label="Desktop"
          title="Desktop"
        >
          <Asterisk className="h-7 w-7 text-ink" />
        </button>
        <button
          type="button"
          onClick={() => setTab('about')}
          className={dockTile}
          aria-label="About"
          title="About"
        >
          <StarburstSmile className="h-8 w-8 text-ink" />
        </button>
        <button
          type="button"
          onClick={() => setTab('projects')}
          className={dockTile}
          aria-label="Projects"
          title="Projects"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 text-ink"
            aria-hidden="true"
          >
            <path d="M4 5h6l2 2h8a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setTab('contact')}
          className="flex h-14 items-center rounded-xl border border-line bg-panel/90 px-4 text-left text-[11px] leading-tight text-ink backdrop-blur transition-all hover:-translate-y-1 hover:border-dim"
          aria-label="Contact"
          title="Contact"
        >
          Enter an
          <br />
          email &amp; a message
        </button>
      </div>
    </div>
  );
}
