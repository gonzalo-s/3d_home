import { Check } from './Check';

export function IotSection() {
  return (
    <section>
      <h2>IOT</h2>
      <Check id="iotData"><span style={{ color: '#279662' }}>●</span> Datos</Check>
      <details className="panel-info">
        <summary>Datos y cámaras</summary>
        <p className="note">Datos: puntos de datos y cableado de red. La fuente de datos de la oficina está en la pared del jardín, al final del escritorio, y desde ahí los cables suben por esa pared y recorren el cielorraso de PA; también bajan a PB y recorren el cielorraso de PB hasta los demás puntos. Las cuatro cámaras exteriores (dos hacia el jardín y dos hacia la calle) se muestran siempre y llegan a esa fuente. Ubicaciones y recorridos interpretados a partir de la descripción y las fotos, pendientes de confirmar.</p>
      </details>
      <p id="iotDetail" className="note" hidden></p>
    </section>
  );
}
