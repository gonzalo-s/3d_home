'use client';

import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Icon } from '../ui/Icon';

export function ReferenceDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const outsideStart = useRef(false);
  const [zoomed, setZoomed] = useState(false);
  const [imageState, setImageState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const dialog = dialogRef.current;
    const image = imageRef.current;
    if (!dialog || !image) return;
    // The engine chooses references imperatively; bridge its hidden flag to a native modal.
    const syncVisibility = () => {
      if (!dialog.hidden && !dialog.open) {
        document.dispatchEvent(new Event('viewer:reference-open'));
        dialog.showModal();
      } else if (dialog.hidden && dialog.open) dialog.close();
    };
    const visibility = new MutationObserver(syncVisibility);
    visibility.observe(dialog, { attributes: true, attributeFilter: ['hidden'] });
    const source = new MutationObserver(() => {
      setZoomed(false);
      setImageState(image.complete ? (image.naturalWidth ? 'ready' : 'error') : 'loading');
      image.parentElement?.scrollTo(0, 0);
    });
    source.observe(image, { attributes: true, attributeFilter: ['src'] });
    syncVisibility();
    return () => { visibility.disconnect(); source.disconnect(); if (dialog.open) dialog.close(); };
  }, []);

  function close() {
    if (dialogRef.current) dialogRef.current.hidden = true;
    const selector = document.querySelector<HTMLSelectElement>('#room');
    if (selector) selector.value = '';
    setZoomed(false);
  }

  function isOutside(event: PointerEvent<HTMLDialogElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  }

  return (
    <dialog id="reference" ref={dialogRef} hidden aria-labelledby="roomtitle"
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClose={() => {
        // close events are queued: a newer reference may already have reopened the dialog.
        if (!dialogRef.current?.hidden || dialogRef.current.open) return;
        // A mobile reference selection closes the controls drawer while the modal opens.
        if (document.activeElement === document.body || document.activeElement?.closest('[inert]')) {
          const mobileButton = document.querySelector<HTMLButtonElement>('#mobile-references');
          if (mobileButton?.getClientRects().length) mobileButton.focus();
          else document.querySelector<HTMLSelectElement>('#room')?.focus();
        }
      }}
      onPointerDown={(event) => { outsideStart.current = isOutside(event); }}
      onPointerUp={(event) => { if (outsideStart.current && isOutside(event)) close(); outsideStart.current = false; }}
      onPointerCancel={() => { outsideStart.current = false; }}>
      <div className="reference-heading">
        <div><span className="eyebrow">Referencia del ambiente</span><h2 id="roomtitle" /></div>
        <button id="closePhoto" type="button" aria-label="Cerrar referencia" onClick={close} autoFocus><Icon name="close" /></button>
      </div>
      <div className="buttons" id="refviews" aria-label="Vistas de la referencia" />
      <div className="reference-image" data-zoomed={zoomed} aria-busy={imageState === 'loading'}>
        {imageState === 'loading' && <p className="image-message" role="status">Cargando imagen…</p>}
        {imageState === 'error' && <p className="image-message" role="alert">No se pudo cargar la imagen. Volvé a elegir la referencia para reintentar.</p>}
        <img id="photo" ref={imageRef} alt="Referencia visual del ambiente" onLoad={() => setImageState('ready')} onError={() => setImageState('error')} />
      </div>
      <div className="reference-footer">
        <p className="refnote">Referencia visual · casa construida</p>
        <button type="button" className="image-zoom" aria-pressed={zoomed} disabled={imageState !== 'ready'} onClick={() => setZoomed(!zoomed)}>{zoomed ? 'Ajustar' : 'Ampliar'}</button>
      </div>
    </dialog>
  );
}
