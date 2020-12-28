import { autoinject, bindable } from 'aurelia-framework';
import { Campaign, Client, SubClient, CustomText, B2WState } from './models/models';

@autoinject
export class Globals {
  public clientId: string = "";
  public isGuest: boolean;
  public client: Client;
  public location: SubClient;
  public campaign: Campaign;
  @bindable public breadcrumbLabel: string = "";

  @bindable public customTextLoaded: boolean = false;

  public apiRoot: string = "";
  public customTextList: CustomText[] = [];

  constructor() {
    this.apiRoot = eval("b2wApiUrlBase");
    this.loadState();
  }

  public findCustomText(code: string): string {
    const translatedText = this.customTextList.find((text) => {
      return text.code === code;
    });
    if (translatedText) {
      return translatedText.text;
    }
    return `[[${code}] code not found.]`;
  }

  private loadState(): void {
    const state = JSON.parse(sessionStorage["B2W-State"] || "{}") as B2WState;
    if (state.client) {
      this.client = state.client;
      this.clientId = state.client.id;
      this.location = state.location;
      this.campaign = state.campaign;
      this.isGuest = state.isGuest;
    }
  }

  public clearState() {
    this.client = null;
    this.location = null;
    this.campaign = null;
    this.isGuest = null;
    sessionStorage.clear();
  }

  public saveState(client: Client, location: SubClient, campaign: Campaign, isGuest: boolean): void {
    this.client = client;
    this.location = location;
    this.campaign = campaign;
    this.isGuest = isGuest;
    sessionStorage.setItem("B2W-State", JSON.stringify({
      isGuest: this.isGuest,
      client: this.client,
      location: this.location,
      campaign: this.campaign
    }));
  }
};
