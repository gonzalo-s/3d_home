'use client';

import { useRef, useState, type ReactNode } from 'react';
import { Icon } from '../ui/Icon';

interface LayerGroupProps {
  id: string;
  optionsId: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function LayerGroup({ id, optionsId, title, description, children }: LayerGroupProps) {
  const [enabled, setEnabled] = useState(false);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="layer-group" data-enabled={enabled} aria-labelledby={`${id}-title`}>
      <div className="layer-heading">
        <label className="layer-parent">
          <input id={id} ref={inputRef} type="checkbox" role="switch" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onChange={(event) => setEnabled(event.target.checked)} />
          <span>
            <span id={`${id}-title`} className="layer-title">{title}</span>
            <span id={`${id}-description`} className="layer-description">{description}</span>
            <span className="layer-state" aria-live="polite">{enabled ? (selected === 1 ? '1 opción seleccionada' : `${selected} opciones seleccionadas`) : 'Apagada'}</span>
          </span>
        </label>
        <button type="button" className="layer-expand" aria-controls={optionsId} aria-expanded={enabled} aria-label={`${enabled ? 'Desactivar' : 'Configurar'} ${title}`} onClick={() => inputRef.current?.click()}><Icon name="chevron" /></button>
      </div>
      <div id={optionsId} ref={optionsRef} className="layer-options" hidden={!enabled}
        onChange={() => setSelected(optionsRef.current?.querySelectorAll('input[type=checkbox]:checked').length ?? 0)}>
        <p className="layer-instruction">Marcá solo las capas que quieras ver.</p>
        {children}
      </div>
    </section>
  );
}
