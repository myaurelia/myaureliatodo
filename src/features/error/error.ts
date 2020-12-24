import { autoinject, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';

@autoinject
export class Error {
  private errorMessage: string;
  private messageCode: string;

  constructor(private globals: Globals,
    private be: BindingEngine,) {
    this.customTextLoaded(this.globals.customTextLoaded);
    this.be
      .propertyObserver(globals, 'customTextLoaded')
      .subscribe((newValue: boolean) => {
        this.customTextLoaded(newValue);
      });
  }

  private activate(params) {
    this.messageCode = params.code;
  }

  customTextLoaded(newValue: boolean): void {
    if (newValue) {
      this.errorMessage = this.globals.findCustomText(this.messageCode);
    }
  }
}
