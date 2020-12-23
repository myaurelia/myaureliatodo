import { PLATFORM } from 'aurelia-pal';
import { observable, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction, Next, Redirect } from 'aurelia-router';
import * as toastr from 'toastr';

@autoinject
export class App {
  @observable private expand: boolean = false;
  public router: Router;

  constructor() { }

  activate(params, routeConfig, navigationInstruction) {

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
