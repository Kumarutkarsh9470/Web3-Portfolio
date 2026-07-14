import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeading>About</SectionHeading>
      <div>
        <p className="mb-4">
          I&apos;m a B.Tech student in Data Science &amp; AI at{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.iitg.ac.in/"
            target="_blank"
            rel="noreferrer noopener"
          >
            IIT Guwahati
          </a>{' '}
          with a passion for building full-stack applications and scalable
          systems. I enjoy working across the entire stack — from crafting
          polished React frontends to engineering robust backend services and
          smart contract infrastructure.
        </p>
        <p className="mb-4">
          Currently, I lead the{' '}
          <span className="font-medium text-slate-200">
            DeFi and Blockchain vertical
          </span>{' '}
          at the Finance and Economics Club, IIT Guwahati, where I manage
          cross-functional teams of 25+ developers and drive technical strategy
          for the Web3 ecosystem.
        </p>
        <p className="mb-4">
          My projects range from{' '}
          <span className="font-medium text-slate-200">
            interactive 9-page visualization platforms
          </span>{' '}
          using React, TypeScript, and Three.js to{' '}
          <span className="font-medium text-slate-200">
            gasless transaction platforms
          </span>{' '}
          on Ethereum with real-time monitoring dashboards. I&apos;m driven by
          building products that are both technically rigorous and genuinely
          useful.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new
          protocols, or diving into number theory and probability.
        </p>
      </div>
    </section>
  );
}
