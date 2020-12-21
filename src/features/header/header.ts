import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, observable, bindable } from 'aurelia-framework';

@autoinject
export class Header {
  private clients: any[];
  private clientId: string;

  constructor(private api: AnonymousApi) { }

  async activate(params): Promise<boolean> {
    this.clientId = params.clientId
    //await this.getData(params.clientId);
    return true;
  }
}
