import { ViewSection } from './ViewSection';
import { ElectricalSection } from './ElectricalSection';
import { InstallationsSection } from './InstallationsSection';
import { IotSection } from './IotSection';
import { InteriorLightingSection } from './InteriorLightingSection';
import { SunSection } from './SunSection';
import { ReferencePhotosSection } from './ReferencePhotosSection';

export function ControlPanel() {
  return (
    <aside>
      <ViewSection />
      <ElectricalSection />
      <InstallationsSection />
      <IotSection />
      <InteriorLightingSection />
      <SunSection />
      <ReferencePhotosSection />
    </aside>
  );
}
