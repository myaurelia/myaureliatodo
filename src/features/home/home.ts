import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, BindingEngine} from 'aurelia-framework';
import { Globals } from '../../globals';
import { Client } from '../../models/models';


@autoinject
export class Home {
  private client: Client;
  private image: string;
  private companyName: string;
  private welcomeText: string;

  constructor(private api: AnonymousApi, private globals: Globals, private be: BindingEngine) {
    this.customTextLoaded(this.globals.customTextLoaded);
    this.be
      .propertyObserver(globals, 'customTextLoaded')
      .subscribe((newValue: boolean) => {
        this.customTextLoaded(newValue);
      });
  }

  async activate(params): Promise<boolean> {
    this.globals.clientId = params.clientId;
    this.getClient(params.clientId);
    return true;
  }

  private async getClient(clientId: string) {
    this.client = await this.api.getClient(clientId);
    this.client.image ? this.image = this.client.image : this.image = "image404.jpg";
    this.companyName = this.client.clientName;
  }

  customTextLoaded(newValue: boolean) {
    if (newValue) {
      this.welcomeText = this.globals.findCustomText("Welcome");
    }
  }
}
