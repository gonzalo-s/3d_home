import { Check } from './Check';

export function SunSection() {
  return (
      <section>
      <h2>Sol y sombras</h2>
      <Check id="sunRef" defaultChecked>Mostrar sol</Check>
      <label>Fecha (Argentina)</label><input id="sunDate" type="date" />
      <label>Hora
      <output id="sunHourOut"></output></label><input id="sunTime" type="time" step="60" /><input id="sunHour" type="range" min="0" max="1439" step="1" />
      <label>Estación · hemisferio sur</label>
      <select id="season"><option value="summer">Verano</option><option value="autumn">Otoño</option><option value="winter">Invierno</option><option value="spring">Primavera</option></select>
      <button id="now">Fecha y hora actuales</button>
      <details className="panel-info">
      <summary>Posición del sol</summary>
      <p id="solarInfo" className="note"></p></details>
      <details>
      <summary>Ubicación y orientación</summary>
      <label>Latitud</label><input id="latitude" type="number" min="-90" max="90" step=".000001" defaultValue="-34.425" />
      <label>Longitud</label><input id="longitude" type="number" min="-180" max="180" step=".000001" defaultValue="-58.580" />
      <label>Dirección hacia el fondo desde la calle (° desde norte)</label><input id="bearing" type="number" min="0" max="359.9" step=".1" defaultValue="227" />
      <Check id="orientationConfirmed" defaultChecked>Orientación aplicada</Check>
      <details className="panel-info">
      <summary>Precisión de la orientación</summary>
      <p className="note">Ubicación aproximada: Tigre Centro. Eje calle → fondo: 227° (sudoeste); frente: 47° (noreste). Ángulo estimado de la captura de Google Maps con norte hacia arriba; precisión aproximada de unos pocos grados. No es una medición topográfica. Podés afinar el ángulo y las coordenadas.</p></details></details>
      <h2>Alturas fijas</h2>
      <details className="panel-info">
      <summary>Alturas del modelo</summary>
      <p className="note">Cielorrasos: general 2,40 m, living 2,90 m y parte plana del baño PB 2,30 m. Bajo el tramo alto de la escalera hay un cierre con quiebres que puede bajar más; su geometría es aproximada. Estos valores no cambian la altura de los muros. Planta alta a 3,40 m sobre planta baja, sin separación adicional. Losa superior sólida con espesor provisional de 0,18 m, manteniendo el piso de PA a 3,40 m. Los muros de PB terminan debajo de la losa; altura total y espesor reales pendientes de medición. Piso base de PB: 0,12 m; patio: 0,08 m, espesores solo de representación. La vista abierta oculta los cielorrasos para explorar el interior.</p></details></section>
  );
}
