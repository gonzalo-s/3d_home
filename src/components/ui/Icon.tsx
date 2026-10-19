import type { SVGProps } from 'react';

type IconName = 'explore' | 'references' | 'sun' | 'layers' | 'close' | 'chevron';
const paths: Record<IconName, string> = {
  explore: 'M4 7h16M7 4v6M4 17h16M16 14v6',
  references: 'M4 4h16v16H4zM4 16l5-5 4 4 3-3 4 4M15 8h.01',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  layers: 'm12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5',
  close: 'm6 6 12 12M6 18 18 6',
  chevron: 'm6 9 6 6 6-6',
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>;
}
