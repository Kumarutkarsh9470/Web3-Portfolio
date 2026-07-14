'use client';

import {
  StarburstSharp,
  StarburstSoft,
  StarFourPoint,
  Asterisk,
} from './Starbursts';

interface IconGridProps {
  onProjects: () => void;
}

const tileClass =
  'group flex h-20 w-20 items-center justify-center rounded-xl border border-line bg-panel/80 transition-colors hover:border-dim hover:bg-panel-2 sm:h-24 sm:w-24';

export default function IconGrid({ onProjects }: IconGridProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-2" aria-label="Quick links">
      <a
        href="https://github.com/Kumarutkarsh9470"
        target="_blank"
        rel="noreferrer noopener"
        className={tileClass}
        aria-label="GitHub (opens in a new tab)"
        title="GitHub"
      >
        <StarburstSharp className="spin-slower h-12 w-12 text-ink transition-colors group-hover:text-neon-pink" />
      </a>

      <button
        type="button"
        onClick={onProjects}
        className={`${tileClass} px-2 text-center`}
        aria-label="Open projects"
        title="Projects"
      >
        <span className="text-[11px] leading-tight text-ink">
          <span className="font-serif italic">For All</span>
          <br />
          <span className="font-bold">Things Onchain</span>
        </span>
      </button>

      <a
        href="https://www.linkedin.com/in/kumar-utkarsh-a63555313"
        target="_blank"
        rel="noreferrer noopener"
        className={tileClass}
        aria-label="LinkedIn (opens in a new tab)"
        title="LinkedIn"
      >
        <StarburstSoft className="h-12 w-12 text-ink transition-transform duration-500 group-hover:rotate-45 group-hover:text-neon-sky" />
      </a>

      <a
        href="https://x.com/KumarUt0141795"
        target="_blank"
        rel="noreferrer noopener"
        className={tileClass}
        aria-label="X / Twitter (opens in a new tab)"
        title="X / Twitter"
      >
        <StarFourPoint className="spin-slow h-12 w-12 text-ink group-hover:text-neon-amber" />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className={tileClass}
        aria-label="Résumé (opens in a new tab)"
        title="Résumé"
      >
        <span className="flex h-10 w-10 items-center justify-center border-2 border-ink text-ink transition-colors group-hover:border-neon-lime group-hover:text-neon-lime">
          <span className="-mr-3 -mt-3 flex h-10 w-10 items-center justify-center border-2 border-current bg-panel text-[10px] font-bold">
            CV
          </span>
        </span>
      </a>

      <a
        href="mailto:kumar.utkarsh@iitg.ac.in"
        className={tileClass}
        aria-label="Email me"
        title="Email"
      >
        <Asterisk className="h-12 w-12 text-ink transition-transform duration-500 group-hover:-rotate-90 group-hover:text-neon-violet" />
      </a>
    </div>
  );
}
