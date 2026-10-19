import type { ReactNode } from 'react';

interface CheckProps {
  id: string;
  defaultChecked?: boolean;
  children: ReactNode;
}

export function Check({ id, defaultChecked, children }: CheckProps) {
  return (
    <label className="check">
      <input id={id} type="checkbox" defaultChecked={defaultChecked} />
      {children}
    </label>
  );
}
