import { Check } from './Check';

export function InstallationsSection() {
  return (
      <section>
      <h2>Otras instalaciones</h2>
      <Check id="installations">Mostrar instalaciones</Check>
      <div id="installationOptions" hidden>
      <Check id="install-cold" defaultChecked><span style={{ color: '#247bea' }}>●</span> Agua fría</Check>
      <Check id="install-hot" defaultChecked><span style={{ color: '#e94f58' }}>●</span> Agua caliente</Check>
      <Check id="install-drain" defaultChecked><span style={{ color: '#477146' }}>●</span> Cloacas</Check>
      <Check id="install-gas" defaultChecked><span style={{ color: '#e89720' }}>●</span> Gas</Check>
      <Check id="install-supply" defaultChecked><span style={{ color: '#ee3f41' }}>●</span> Calefacción · alimentación</Check>
      <Check id="install-return" defaultChecked><span style={{ color: '#b645c8' }}>●</span> Calefacción · retorno</Check>
      <details className="panel-info">
      <summary>Fuentes y alturas de instalaciones</summary>
      <p className="note">Trazados extraídos de las capas de Casa Instalaciones.dwg, alineados a cada planta. Confirmados por Gonza como instalaciones actuales.<br /><br />Se muestran como referencias de planta, a poca altura sobre el piso para poder inspeccionarlos. Estas alturas no representan la elevación real de los caños ni sus bajadas. El plano indica un tramo de agua por cielorraso de PA; falta precisar el desarrollo vertical. Diámetros y detalles originales se consultan en los planos fuente; no se asignan a tramos sin identificar.</p></details>
      <div className="buttons">
      <button id="sourceInstallWater">Agua / cloacas</button>
      <button id="sourceInstallGas">Gas</button>
      <button id="sourceInstallHeat">Calefacción</button></div></div></section>
  );
}
