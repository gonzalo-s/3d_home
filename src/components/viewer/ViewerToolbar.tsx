export function ViewerToolbar() {
  return (
    <div className="viewer-toolbar" role="group" aria-label="Plantas y vista del modelo">
      <button id="pbToggle" type="button" aria-pressed="true">Planta baja</button>
      <button id="paToggle" type="button" aria-pressed="true">Planta alta</button>
      <span className="toolbar-divider" />
      <button id="perspective" type="button" aria-pressed="true" aria-label="Vista en perspectiva 3D" title="Vista 3D">3D</button>
      <button id="top" type="button" aria-pressed="false" aria-label="Vista desde arriba" title="Desde arriba">2D</button>
    </div>
  );
}
