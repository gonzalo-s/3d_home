import { Check } from './Check';
import { LayerGroup } from './LayerGroup';

export function InstallationsSection() {
  return (
      <LayerGroup id="installations" optionsId="installationOptions" title="Instalaciones" description="Agua, desagües, gas y calefacción">
      <fieldset className="layer-subgroup"><legend>Agua y desagües</legend>
      <Check id="install-cold"><span style={{ color: '#247bea' }}>●</span> Agua fría</Check>
      <Check id="install-hot"><span style={{ color: '#e94f58' }}>●</span> Agua caliente</Check>
      <Check id="install-drain"><span style={{ color: '#477146' }}>●</span> Cloacas</Check>
      </fieldset>
      <fieldset className="layer-subgroup"><legend>Gas</legend>
      <Check id="install-gas"><span style={{ color: '#e89720' }}>●</span> Gas</Check>
      </fieldset>
      <fieldset className="layer-subgroup"><legend>Calefacción</legend>
      <Check id="install-supply"><span style={{ color: '#ee3f41' }}>●</span> Calefacción · alimentación</Check>
      <Check id="install-return"><span style={{ color: '#b645c8' }}>●</span> Calefacción · retorno</Check>
      </fieldset>
      <details className="layer-documents"><summary>Planos y criterios</summary>
      <details className="panel-info">
      <summary>Fuentes y alturas de instalaciones</summary>
      <p className="note">Trazados extraídos de las capas de Casa Instalaciones.dwg, alineados a cada planta. Confirmados por Gonza como instalaciones actuales.<br /><br />Se muestran como referencias de planta, a poca altura sobre el piso para poder inspeccionarlos. Estas alturas no representan la elevación real de los caños ni sus bajadas. El plano indica un tramo de agua por cielorraso de PA; falta precisar el desarrollo vertical. Diámetros y detalles originales se consultan en los planos fuente; no se asignan a tramos sin identificar.</p></details>
      <div className="buttons">
      <button id="sourceInstallWater">Agua / cloacas</button>
      <button id="sourceInstallGas">Gas</button>
      <button id="sourceInstallHeat">Calefacción</button></div></details></LayerGroup>
  );
}
