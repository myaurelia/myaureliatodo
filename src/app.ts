import { PLATFORM } from 'aurelia-pal';
import { observable, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction, Next, Redirect } from 'aurelia-router';
import { AnonymousApi } from 'services/api/anonymous-api';
import { Globals } from './globals';

import * as toastr from 'toastr';

@autoinject
export class App {
  private language: string = 'es';//window.navigator.language;
  public router: Router;

  constructor(private api: AnonymousApi, private globals: Globals) {
    
    this.loadCustomText();
   

  }

  activate(params, routeConfig, navigationInstruction) { }

  private async loadCustomText() {
    const customTexts = await this.api.getCustomText(this.language);
    this.globals.customTextList = customTexts;
    this.globals.customTextLoaded = true;
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.options.eagerLoadAll = true;
    config.options.pushState = true;
    config.map([
      {
        route: '',
        redirect: 'home'
      },
      {
        route: 'home/:clientId?',
        name: 'home',
        moduleId: PLATFORM.moduleName('./features/home/home'),
        title: 'Welcome'
      },
      {
        route: 'error',
        name: 'error',
        moduleId: PLATFORM.moduleName('./features/error/error'),
        title: 'Error'
      }
    ]);

    this.router = router;
  }

}
