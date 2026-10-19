'use client';

import { useEffect, useState } from 'react';
import { ControlPanel } from '../controls/ControlPanel';
import { ReferenceDialog } from './ReferenceDialog';
import { ViewerToolbar } from './ViewerToolbar';

export function HouseViewer() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  useEffect(() => {
    let cancelled = false;
    let viewer: { dispose(): void } | undefined;
    import('../../engine/core/createHouseViewer.js').then(({ createHouseViewer }) => {
      if (!cancelled) {
        viewer = createHouseViewer();
        setStatus('ready');
      }
    }).catch(() => { if (!cancelled) setStatus('error'); });
    return () => {
      cancelled = true;
      viewer?.dispose();
    };
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>Casa Valle <span>/ Plano 3D</span></h1>
          <small>Modelo de trabajo basado en CAD y fotos actuales</small>
        </div>
        <div className="header-actions">
          <span className="badge">Circuito y luminarias · v39</span>
          <a href="/api/auth/signout" aria-label="Cerrar sesión">Salir</a>
        </div>
      </header>
      <main>
        <ControlPanel />
        <div id="view" role="region" aria-label="Visor 3D de Casa Valle">
          <ViewerToolbar />
          {status !== 'ready' && <div className="viewer-loading" role={status === 'error' ? 'alert' : 'status'}>
            {status === 'loading' ? 'Cargando modelo 3D…' : <><p>No se pudo iniciar el visor 3D.</p><button type="button" onClick={() => window.location.reload()}>Volver a intentar</button></>}
          </div>}
          <div id="empty" hidden>Activá una planta para ver el modelo.</div>
          <div id="hint"><span className="desktop-hint">Arrastrá para girar · rueda para acercar · pasá sobre un muro para ver adentro</span><span className="mobile-hint">Arrastrá para girar · pellizcá para acercar · tocá un muro para ver adentro</span></div>
          <div id="status"></div>
          <ReferenceDialog />
        </div>
      </main>
    </>
  );
}
