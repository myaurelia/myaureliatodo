import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('../features/header/header'),
    PLATFORM.moduleName('../features/footer/footer')
  ]);
}
