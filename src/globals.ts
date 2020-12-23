import { autoinject, observable, bindable } from 'aurelia-framework';

@autoinject
export class Globals {
  @bindable
  public clientId: string = "";

  constructor() {
    
  }
};
