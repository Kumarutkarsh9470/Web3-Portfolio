interface StarProps {
  className?: string;
}

export function StarburstSmile({ className }: StarProps) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      <path d="M50 2l7.6 15.8 13-11.7 1.9 17.4 16.4-6.2-4.1 17 17.4 1.9-9.7 14.6L108 58l-13.9 10.7 10.7 13.9-17.2-.5 1.9 17.4-15.5-8.1-4.1 17-11.9-12.8L50 98l-7.6-15.8-13 11.7-1.9-17.4-16.4 6.2 4.1-17-17.4-1.9 9.7-14.6L-8 42l13.9-10.7L-4.8 17.4l17.2.5-1.9-17.4 15.5 8.1 4.1-17 11.9 12.8L50 2z" transform="scale(0.86) translate(8,8)" />
      <circle cx="38" cy="46" r="4.5" fill="#060606" />
      <circle cx="62" cy="46" r="4.5" fill="#060606" />
      <path d="M36 60c4 6 9 9 14 9s10-3 14-9" stroke="#060606" strokeWidth="4.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function StarburstSharp({ className }: StarProps) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      <path d="M50 0l6 32 22-24-10 31 31-10-24 22 32 6-32 6 24 22-31-10 10 31-22-24-6 32-6-32-22 24 10-31-31 10 24-22-32-6 32-6-24-22 31 10-10-31 22 24z" />
    </svg>
  );
}

export function StarburstSoft({ className }: StarProps) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      <path d="M50 4c4 14 10 20 24 12-8 14-6 22 12 24-18 2-20 10-12 24-14-8-20-2-24 12-4-14-10-20-24-12 8-14 6-22-12-24 18-2 20-10 12-24 14 8 20 2 24-12z" />
    </svg>
  );
}

export function StarFourPoint({ className }: StarProps) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      <path d="M50 0c3 30 17 44 47 47-30 3-44 17-47 47-3-30-17-44-47-47 30-3 44-17 47-47z" />
    </svg>
  );
}

export function Asterisk({ className }: StarProps) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      <path d="M44 8h12v28l24-14 6 10-24 14 24 14-6 10-24-14v28H44V56L20 70l-6-10 24-14-24-14 6-10 24 14V8z" />
    </svg>
  );
}
