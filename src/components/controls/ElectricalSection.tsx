import { Check } from './Check';
import { LayerGroup } from './LayerGroup';

export function ElectricalSection() {
  return (
      <LayerGroup id="electrical" optionsId="electricOptions" title="Electricidad" description="Tomas, luces y circuitos">
      <fieldset className="layer-subgroup"><legend>Elementos</legend>
      <Check id="electricOutlets">Tomas por altura</Check>
      <Check id="electricLights">Puntos de luz</Check>
      <Check id="electricPanels">Tableros</Check>
      </fieldset>
      <fieldset className="layer-subgroup"><legend>Recorridos</legend>
      <Check id="electricRoutes">Conexiones del CAD</Check>
      <Check id="electricDrops">Bajadas esquemáticas</Check>
      </fieldset>
      <fieldset className="layer-subgroup"><legend>Etiquetas</legend>
      <Check id="electricNumbers">Identificadores</Check>
      <Check id="electricAnnotations">Referencias numeradas del plano</Check>
      </fieldset>
      <details className="layer-documents"><summary>Planos y criterios</summary>
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
      </details>
      <p id="electricDetail" className="note" hidden></p></LayerGroup>
  );
}
