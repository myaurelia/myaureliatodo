import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, observable, bindable } from 'aurelia-framework';

@autoinject
export class Error {
  private clients: any[];
  @bindable({ defaultValue: "" })
  private searchText: string = "";

  constructor(private api: AnonymousApi) { }

  private activate(params) {

  }
}
