import { autoinject } from 'aurelia-framework';
import { HttpClient } from "aurelia-fetch-client";
import { Globals } from '../../globals';
import { BaseApi } from './base-api';
import { CustomText, Client, Campaign } from '../../models/models';

@autoinject
export class AnonymousApi extends BaseApi {
  private api: HttpClient;

  constructor(private globals: Globals) {
    super();
    this.api = super.generateApiClient(this.globals.apiRoot);
  }

  async getCustomText(language: string): Promise<CustomText[]> {
    const url = `b2wcustomtext/translated/${language}`;
    const result = await this.api.fetch(url);
    return result.json();
  }

  async getClient(clientId: string): Promise<Client> {
    const url = `client/${clientId}/sub-client/true`;
    const result = await this.api.fetch(url);
    return result.json();
  }

  async getCampaigns(subClientId: string): Promise<Campaign[]> {
    const url = `campaign/subclient/${subClientId}`;
    const result = await this.api.fetch(url);
    return result.json();
  }
}
