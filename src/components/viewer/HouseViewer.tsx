'use client';

import { useEffect } from 'react';
import { ControlPanel } from '../controls/ControlPanel';

export function HouseViewer() {
  useEffect(() => {
    let cancelled = false;
    let viewer: { dispose(): void } | undefined;
    import('../../engine/core/createHouseViewer.js').then(({ createHouseViewer }) => {
      if (!cancelled) viewer = createHouseViewer();
    });
    return () => {
      cancelled = true;
      viewer?.dispose();
    };
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>
            Casa Valle <span style={{ fontWeight: 300 }}>/ Plano 3D</span>
          </h1>
          <small>Modelo de trabajo basado en CAD y fotos actuales</small>
        </div>
        <span className="badge">Circuito y luminarias · v39</span>
      </header>
      <main>
        <ControlPanel />
        <div id="view">
          <div id="empty" hidden>Activá una planta para ver el modelo.</div>
          <div id="hint">Arrastrá para girar · pellizco para acercar · cursor sobre muro exterior: transparencia · celular: tocar muro</div>
          <div id="status"></div>
          <div id="reference" hidden>
            <button id="closePhoto">×</button>
            <p id="roomtitle"></p>
            <div className="buttons" id="refviews" style={{ marginBottom: '10px' }}></div>
            <img id="photo" alt="Foto actual del ambiente" />
            <p className="refnote">Foto suministrada por Gonza · referencia de la casa construida</p>
          </div>
        </div>
      </main>
    </>
  );
}
