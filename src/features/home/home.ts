import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, observable, bindable } from 'aurelia-framework';
import { Globals } from '../../globals';


@autoinject
export class Home {
  private clients: any[];
  private clientId: string;

  constructor(private api: AnonymousApi, private globals: Globals) {
  }

  async activate(params): Promise<boolean> {
    this.globals.clientId = params.clientId;
    console.log(this.globals);

    //await this.getData(params.patientId);
    return true;
  }
}
