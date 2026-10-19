import { Check } from './Check';

export function ElectricalSection() {
  return (
      <section>
      <h2>Electricidad</h2>
      <Check id="electrical">Mostrar capa eléctrica</Check>
      <div id="electricOptions" hidden>
      <Check id="electricOutlets" defaultChecked>Tomas por altura</Check>
      <Check id="electricLights" defaultChecked>Puntos de luz</Check>
      <Check id="electricPanels" defaultChecked>Tableros</Check>
      <Check id="electricRoutes" defaultChecked>Conexiones del CAD</Check>
      <Check id="electricDrops" defaultChecked>Bajadas esquemáticas</Check>
      <Check id="electricNumbers">Identificadores</Check>
      <Check id="electricAnnotations">Referencias numeradas del plano</Check>
      <details className="panel-info">
      <summary>Leyenda de electricidad</summary>
      <p className="note"><span style={{ color: '#e33' }}>●</span> Inferiores: 0,25 m<br /><span style={{ color: '#c29500' }}>●</span> Intermedios: 1,30 m<br /><span style={{ color: '#279cce' }}>●</span> Superiores: 2,30 m<br /><span style={{ color: '#17232d' }}>●</span> Iluminación · <span style={{ color: '#279662' }}>●</span> Datos<br />Rojo: conexiones de tomas · negro: luces · celeste: aires · violeta: otros trazados CAD, por revisar.</p></details>
      <details className="panel-info">
      <summary>Fuentes y criterios eléctricos</summary>
      <p className="note">Tomas: DWG 027. Conexiones y referencias: Casa Instalaciones.dwg. Curvas de conexión proyectadas a cielorraso, sin afirmar que el caño tenga esa forma. Bajadas punteadas interpretadas; no se inventa continuidad entre tomas.<br /><br />Isla: alimentación subterránea confirmada, sin conexiones por cielorraso. Se adapta el destino a la isla actual. Profundidad de −0,10 m solo para visualizar; falta medirla. Sus ramales internos son esquemáticos.<br /><br />Hacé clic en un punto o tablero para ver su estado y la lista de circuitos. Numeración de luces y llaves conservada como referencia del plano, sin confundirla con números de circuitos. Alturas de datos y tableros pendientes de confirmar.</p></details>
      <div className="buttons">
      <button id="sourceInstallElectric">CAD eléctrico PB / PA</button></div>
      <div className="buttons">
      <button id="electricPB">PDF previo PB</button>
      <button id="electricPA">PDF previo PA</button></div>
      <p id="electricDetail" className="note" hidden></p></div></section>
  );
}
