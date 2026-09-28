export function CompassMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="2" fill="#1A2332" />
      <path d="M16 4 L18.2 13.8 L28 16 L18.2 18.2 L16 28 L13.8 18.2 L4 16 L13.8 13.8 Z" fill="#F5F2EB" />
      <path d="M16 6.2 L16.9 14.4 L16 16 L15.1 14.4 Z" fill="#947642" />
      <circle cx="16" cy="16" r="2.1" fill="#74362F" />
      <circle cx="16" cy="16" r="0.7" fill="#F5F2EB" />
    </svg>
  );
}
