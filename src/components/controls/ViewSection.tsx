import { Check } from './Check';

export function ViewSection() {
  return (
      <section>
      <h2>Explorar</h2>
      <Check id="labels">Etiquetas de sectores</Check>
      <Check id="cad">Comparar con CAD original</Check>
      <Check id="cover" defaultChecked>Cubierta del patio</Check>
      <Check id="roofVisible" defaultChecked>Techo y cielorraso</Check>
      <Check id="bathCeiling">Cielorraso del baño PB</Check>
      <button id="capture">Guardar imagen</button></section>
  );
}
