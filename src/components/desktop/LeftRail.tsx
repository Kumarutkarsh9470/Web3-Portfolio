'use client';

import Clock from './Clock';

export default function LeftRail() {
  return (
    <div className="flex max-w-xs flex-col gap-8">
      <p className="text-[13px] leading-6 text-mut">
        gm... I do blocks. Come ship amazing things onchain with me. Any type
        of protocol — but probably read the audit first. Join in harnessing
        typed signatures and bonding curves to catalyze unprecedented dapps.
        Let thy code hit the chain.
      </p>

      <h1 className="font-display text-[88px] leading-[0.9] tracking-tight text-ink sm:text-[110px]">
        KUMAR
        <br />
        UTKARSH
      </h1>

      <div className="flex items-start gap-6 text-xs leading-5">
        <div>
          <p className="text-2xl font-bold text-ink">
            <Clock />
          </p>
          <p className="mt-1 text-mut">
            web3 × AI engineer
            <br />
            chain: ethereum
            <br />
            gas: optimized
            <br />
            status: shipping
          </p>
        </div>
        <ul className="text-right sm:text-left">
          <li className="text-ink">• Guwahati</li>
          <li className="text-dim">London</li>
          <li className="text-dim">New York</li>
          <li className="text-dim">Singapore</li>
          <li className="text-dim">Bangalore</li>
          <li className="text-dim">LOCAL</li>
        </ul>
      </div>

      <ul className="space-y-1 text-xs text-dim">
        <li>
          <a
            href="https://github.com/Kumarutkarsh9470"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-mut"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kumar-utkarsh-a63555313"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-mut"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://x.com/KumarUt0141795"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-mut"
          >
            X / Twitter
          </a>
        </li>
        <li className="pt-2">Made by Kumar Utkarsh, 2026</li>
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="w-fit rounded-full border border-neon-lime px-4 py-1.5 text-xs text-neon-lime transition-colors hover:bg-neon-lime hover:text-desk"
      >
        View Résumé ↗
      </a>
    </div>
  );
}
