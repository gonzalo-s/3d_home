import { Check } from './Check';

export function InteriorLightingSection() {
  return (
      <section>
      <h2>Iluminación interior</h2>
      <Check id="autoInteriorSpots" defaultChecked>Luces automáticas al anochecer</Check>
      <Check id="skylightDaylight" defaultChecked>Luz diurna de claraboyas</Check>
      <details className="panel-info">
      <summary>Cómo funciona</summary>
      <p className="note">Spots cálidos en los puntos interiores del DWG, excepto tomas provisionales bajo claraboyas. Ubicaciones de spots de planta alta corregidas según la captura; los puntos DWG se conservan como referencias eléctricas. Cada luminaria instalada aporta luz difusa dentro de su ambiente. Los límites de los ambientes bloquean el paso por paredes y entre plantas; las sombras de muebles son aproximadas. El baño chico de PA tiene un aplique de pared. Los dos apliques del acceso PB están a 2,10 m y el spot PB-L01 se agrega centrado frente a la puerta; las conexiones nuevas se representan como recorridos interpretados por cielorraso. Los nodos eléctricos coinciden con las luminarias actuales. Tres claraboyas con luz diurna difusa: baño del fondo, vestidor y pasillo/escalera; esta última también aporta luz a PB. Sus tamaños son aproximados según la captura. Los puntos provisionales se conservan en la capa eléctrica sin representar luminarias instaladas. Exterior: apliques blancos orientados hacia abajo y al césped; los tres puntos junto a los arbustos no están instalados. Posiciones y alturas de apliques aproximadas según la captura. Se encienden cuando el sol baja del horizonte, según la fecha y hora elegidas, y se apagan durante el día. Los puntos exteriores no se incluyen. Posición tomada del plano; tamaño e intensidad de las luminarias orientativos.</p></details></section>
  );
}
