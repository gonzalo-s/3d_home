import { Check } from './Check';

export function ViewSection() {
  return (
      <section>
      <h2>Explorar</h2>
      <fieldset className="views">
      <legend>Plantas</legend>
      <button id="pbToggle" type="button" aria-pressed="true">Planta baja · ON</button>
      <button id="paToggle" type="button" aria-pressed="true">Planta alta · ON</button></fieldset>
      <div className="buttons">
      <button id="perspective">Vista 3D</button>
      <button id="top">Desde arriba</button></div>
      <Check id="labels">Etiquetas de sectores</Check>
      <Check id="cad">Comparar con CAD original</Check>
      <Check id="cover" defaultChecked>Cubierta del patio</Check>
      <Check id="roofVisible" defaultChecked>Techo y cielorraso</Check>
      <Check id="bathCeiling">Cielorraso del baño PB</Check>
      <button id="capture">Guardar imagen</button></section>
  );
}
