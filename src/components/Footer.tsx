export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Figma
        </a>{' '}
        and coded in{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </a>
        . Built with{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        . Inspired by{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
        .
      </p>
    </footer>
  );
}
