import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, observable, bindable, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';

@autoinject
export class Header {
  private clients: any[];
  @bindable
  private clientId: string;

  constructor(private api: AnonymousApi, globals: Globals, private be: BindingEngine) {
    this.be
      .propertyObserver(globals, 'clientId')
      .subscribe((newValue, oldValue) => {
        this.objectValueChanged(newValue, oldValue)
      });
    
  }

  objectValueChanged(newValue, oldValue) {
    this.clientId = newValue;
  }


}
