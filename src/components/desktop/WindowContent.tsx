'use client';

import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { socialLinks } from '@/data/social';

export const ACCENT_TEXT: Record<string, string> = {
  pink: 'text-neon-pink',
  lime: 'text-neon-lime',
  sky: 'text-neon-sky',
  amber: 'text-neon-amber',
  violet: 'text-neon-violet',
  lemon: 'text-neon-lemon',
};

export function DesktopTab() {
  return (
    <div>
      <h3 className="text-xl font-bold text-ink">Kumar Utkarsh</h3>
      <p className="mt-1 text-xs leading-5 text-mut">
        TL;DR:
        <br />
        One-person team.
        <br />
        Big blocks.
      </p>

      <p className="mx-auto mt-10 max-w-md text-center font-serif text-lg italic leading-relaxed text-ink/90">
        I build where consensus is hard and gas is expensive — onchain, where
        most have traveled less.
      </p>

      <h4 className="mt-12 text-lg font-bold text-neon-lemon">What I Ship</h4>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 text-[13px] leading-6 sm:grid-cols-3">
        <div>
          <p className="text-neon-pink">
            Smart Contracts
            <br />
            Protocol Design
            <br />
            Gas Optimization
          </p>
          <p className="mt-5 text-neon-lime">
            DeFi — Vaults, AMMs
            <br />
            Prediction Markets
            <br />
            Onchain Payment Rails
          </p>
        </div>
        <div>
          <p className="text-neon-sky">
            AI Interpretability
            <br />
            ML Pipelines
            <br />
            Quant &amp; Probability
          </p>
          <p className="mt-5 text-neon-amber">
            Full-Stack dApps
            <br />
            React Frontends
            <br />
            Relayer Infrastructure
          </p>
        </div>
        <div>
          <p className="text-neon-violet">
            zk-SNARKs / Circom
            <br />
            Token Bound Accounts
            <br />
            Meta-Transactions
          </p>
          <p className="mt-5 text-mut">
            Others (Every idea matters —
            <br />
            no protocol too weird, no chain
            <br />
            too new. If you&apos;re a person with
            <br />
            an idea, come say gm.)
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectsTab() {
  return (
    <div>
      <h3 className="text-xl font-bold text-ink">Projects/</h3>
      <p className="mt-1 text-xs text-mut">
        {projects.length} items — sorted by degen energy
      </p>
      <ul className="mt-6 divide-y divide-line">
        {projects.map((p) => (
          <li key={p.title} className="group py-5">
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="block"
              aria-label={`${p.title} on GitHub (opens in a new tab)`}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-base font-bold text-ink transition-colors group-hover:text-neon-pink">
                  {p.title}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-widest ${
                    ACCENT_TEXT[p.accent ?? 'pink']
                  }`}
                >
                  {p.category}
                </span>
                <span className="ml-auto text-xs text-dim">{p.year}</span>
              </div>
              {p.award && (
                <p className="mt-1 text-xs font-semibold text-neon-lemon">
                  ★ {p.award}
                </p>
              )}
              <p className="mt-2 text-[13px] leading-6 text-mut">
                {p.description}
              </p>
              <p className="mt-2 text-xs text-dim">
                {p.technologies.join(' · ')}
                <span className="ml-3 inline-block text-neon-lime opacity-0 transition-opacity group-hover:opacity-100">
                  open ↗
                </span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutTab() {
  return (
    <div>
      <h3 className="text-xl font-bold text-ink">About/</h3>
      <p className="mt-1 text-xs text-mut">human.readme</p>

      <div className="mt-6 space-y-4 text-[13px] leading-6">
        <p>
          B.Tech in <span className="text-ink">Data Science &amp; AI</span> at{' '}
          <a
            href="https://www.iitg.ac.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink underline decoration-neon-pink decoration-2 underline-offset-2 hover:text-neon-pink"
          >
            IIT Guwahati
          </a>
          , graduating 2028. I spend most of my time onchain — writing Solidity,
          breaking it with fuzz tests, and building the frontends that make it
          usable. The rest goes to poking at neural networks to see what they
          are thinking.
        </p>
        <p>
          I lead the{' '}
          <span className="text-ink">DeFi &amp; Blockchain vertical</span> at
          the Finance and Economics Club, IIT Guwahati — a 25+ member team
          driving Web3 partnerships, project pipelines, and workshops on smart
          contract development and DeFi protocol design.
        </p>
      </div>

      <h4 className="mt-10 text-sm font-bold tracking-widest text-neon-lemon">
        ACHIEVEMENTS.LOG
      </h4>
      <ul className="mt-4 space-y-4">
        {experiences.map((e) => (
          <li key={e.company + e.title} className="text-[13px] leading-6">
            <span className="font-bold text-ink">{e.company}</span>
            <span className="mx-2 text-dim">—</span>
            <span className="text-neon-lime">{e.title}</span>
            <p className="mt-0.5 text-mut">{e.description}</p>
          </li>
        ))}
      </ul>

      <h4 className="mt-10 text-sm font-bold tracking-widest text-neon-lemon">
        STACK.JSON
      </h4>
      <div className="mt-4 grid grid-cols-1 gap-4 text-[13px] leading-6 sm:grid-cols-2">
        <p>
          <span className="text-neon-pink">chain:</span>{' '}
          Solidity, Foundry, Hardhat, EIP-712, EIP-2771, ERC-4626, ERC-6551,
          IPFS, zk-SNARKs, Circom
        </p>
        <p>
          <span className="text-neon-sky">web:</span>{' '}
          TypeScript, React, Next.js, Vite, wagmi, Fastify, Tailwind
        </p>
        <p>
          <span className="text-neon-amber">ai:</span>{' '}
          Python, PyTorch, FastAPI, Three.js (for the pretty parts)
        </p>
        <p>
          <span className="text-neon-violet">tools:</span>{' '}
          C/C++, MySQL, Git, Linux, Docker, Vercel
        </p>
      </div>
    </div>
  );
}

export function ContactTab() {
  return (
    <div>
      <h3 className="text-xl font-bold text-ink">Contact/</h3>
      <p className="mt-1 text-xs text-mut">
        inbox is open. no concept too grand, no gm too small.
      </p>

      <div className="mt-8 space-y-3">
        <a
          href="mailto:kumar.utkarsh@iitg.ac.in"
          className="block text-lg font-bold text-ink underline decoration-neon-pink decoration-2 underline-offset-4 hover:text-neon-pink"
        >
          kumar.utkarsh@iitg.ac.in
        </a>
        <p className="text-[13px] leading-6 text-mut">
          For collabs, hackathon teams, protocol ideas, research rabbit holes,
          or an audit of that contract you&apos;re definitely not going to
          deploy unaudited.
        </p>
      </div>

      <ul className="mt-8 space-y-2 text-[13px]">
        {socialLinks
          .filter((s) => s.icon !== 'email')
          .map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-mut transition-colors hover:text-neon-lime"
              >
                <span className="text-dim">↗ </span>
                {s.name}
                <span className="text-dim">
                  {' — '}
                  {s.url.replace('https://', '').replace('www.', '')}
                </span>
              </a>
            </li>
          ))}
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="text-mut transition-colors hover:text-neon-lime"
          >
            <span className="text-dim">↗ </span>Résumé
            <span className="text-dim"> — one page, zero fluff</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
