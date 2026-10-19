'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '../ui/Icon';
import { ViewSection } from './ViewSection';
import { ElectricalSection } from './ElectricalSection';
import { InstallationsSection } from './InstallationsSection';
import { IotSection } from './IotSection';
import { SunSection } from './SunSection';
import { ModelInfoSection } from './ModelInfoSection';

const tabs = [
  { id: 'explore', label: 'Explorar', icon: 'explore' },
  { id: 'sun', label: 'Luz y sol', icon: 'sun' },
  { id: 'layers', label: 'Capas', icon: 'layers' },
] as const;
type Tab = typeof tabs[number]['id'];

export function ControlPanel({ handControls }: { handControls?: React.ReactNode }) {
  const [active, setActive] = useState<Tab | null>(null);
  const [mobile, setMobile] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const open = mobile && active !== null;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 750px), (max-width: 1000px) and (max-height: 500px)');
    const update = () => { setMobile(query.matches); setActive(null); };
    const close = () => setActive(null);
    update();
    query.addEventListener('change', update);
    document.addEventListener('viewer:reference-open', close);
    return () => { query.removeEventListener('change', update); document.removeEventListener('viewer:reference-open', close); };
  }, []);

  useEffect(() => {
    const background = [document.querySelector<HTMLElement>('#view'), document.querySelector<HTMLElement>('header')];
    background.forEach((element) => { if (element) element.inert = open; });
    if (open) headingRef.current?.focus();
    return () => { background.forEach((element) => { if (element) element.inert = false; }); };
  }, [open, active]);

  function close() {
    const previous = active;
    setActive(null);
    if (previous) document.getElementById(`mobile-${previous}`)?.focus();
  }

  return (
    <>
      {open && <button className="controls-backdrop" data-active={active} aria-label="Cerrar controles" tabIndex={-1} onClick={close} />}
      <aside ref={panelRef} id="controls" data-open={open} data-active={active ?? ''}
        role={open ? 'dialog' : undefined} aria-modal={open || undefined} aria-label="Controles del modelo"
        onKeyDown={(event) => {
          if (!open) return;
          if (event.key === 'Escape') { event.preventDefault(); close(); }
          if (event.key !== 'Tab') return;
          const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('button, input, select, summary, a[href]') ?? []).filter((element) => element.getClientRects().length && !element.hasAttribute('disabled'));
          const first = focusable[0], last = focusable.at(-1);
          if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }}>
        <div className="controls-sheet" id="controls-sheet">
          <div className="sheet-heading">
            <h2 ref={headingRef} tabIndex={-1}>{tabs.find((tab) => tab.id === active)?.label ?? 'Controles'}</h2>
            <button type="button" aria-label="Cerrar controles" onClick={close}><Icon name="close" /></button>
          </div>
          <div className="controls-scroll">
            <div className="control-group" data-panel="explore"><ViewSection />{handControls}<ModelInfoSection /></div>
            <div className="control-group" data-panel="layers"><div className="layers-intro"><h2>Capas del modelo</h2><p>Abrí un grupo y elegí qué mostrar.</p></div><ElectricalSection /><InstallationsSection /><IotSection /></div>
            <div className="control-group" data-panel="sun"><SunSection /></div>
          </div>
        </div>
        <nav className="mobile-navigation" aria-label="Herramientas del modelo">
          {tabs.map((tab) => <button key={tab.id} id={`mobile-${tab.id}`} type="button" aria-expanded={active === tab.id} aria-controls="controls-sheet"
            onClick={() => { if (active === tab.id) close(); else setActive(tab.id); }}>
            <Icon name={tab.icon} /><span>{tab.label}</span>
          </button>)}
        </nav>
      </aside>
    </>
  );
}
