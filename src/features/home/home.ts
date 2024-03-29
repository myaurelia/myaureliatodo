import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, bindable, BindingEngine} from 'aurelia-framework';
import { Globals } from '../../globals';
import { Campaign, Client, NameValues } from '../../models/models';
import { Router } from 'aurelia-router';
import * as toastr from 'toastr';

@autoinject
export class Home {
  private client: Client;
  private campaigns: Campaign[] = [];
  private image: string;
  private companyName: string;
  private welcomeText: string;
  private registeredUserButtonText: string;
  private guestButtonText: string;
  private selectLocationLabel: string;
  private selectedLocationClass: string;
  private selectedLocationError: string;
  private selectCampaignLabel: string;
  private selectedCampaignClass: string;
  private selectedCampaignError: string;

  @bindable({ changeHandler: 'locationChanged' })
  private selectedLocation = "";

  @bindable({ changeHandler: 'campaignChanged' })
  private selectedCampaign = "";

  constructor(
    private api: AnonymousApi,
    private globals: Globals,
    private be: BindingEngine,
    private router: Router) {
    this.customTextLoaded(this.globals.customTextLoaded);
    this.be
      .propertyObserver(globals, 'customTextLoaded')
      .subscribe((newValue: boolean) => {
        this.customTextLoaded(newValue);
      });
  }

  async activate(params): Promise<boolean> {
    this.getClient(params.clientId);
    return true;
  }

  private async getClient(clientId: string): Promise<void> {
    this.globals.clearState();
    this.api.getClient(clientId).then((client) => {
      this.client = client;
      this.globals.clientId = client.id;
      this.client.image ? this.image = this.client.image : this.image = "image404.jpg";
      this.companyName = this.client.clientName;
    }).catch((error) => {
      this.router.navigateToRoute("error", { code: "InvalidLinkQrCode" });
    });
  }

  customTextLoaded(newValue: boolean): void {
    if (newValue) {
      this.welcomeText = this.globals.findCustomText("Welcome");
      this.registeredUserButtonText = this.globals.findCustomText("EmployeeButton");
      this.guestButtonText = this.globals.findCustomText("GuestButton");
      this.selectLocationLabel = this.globals.findCustomText("SelectLocation");
      this.selectCampaignLabel = this.globals.findCustomText("SelectCampaign");
      this.selectedCampaignError = this.globals.findCustomText("NoDefaultCampaign");
      this.selectedLocationError = this.globals.findCustomText("SelectSubclient");
    }
  }

  async locationChanged(subclientId: string): Promise<void> {
    if (subclientId) {
      const subclient = this.client.subClients.find(sc => sc.id === subclientId);
      if (subclient.nameValues) {
        this.registeredUserButtonText = this.globals.findCustomText(subclient.nameValues.FullValue);
        this.globals.breadcrumbLabel = this.registeredUserButtonText;
      }
      this.campaigns = await this.api.getCampaigns(subclientId);
      this.selectedLocationClass = "has-success";
      if (!this.campaigns.length) {
        this.selectedCampaignClass = "has-error";
      }
    } else {
      this.campaigns = [];
      this.selectedLocationClass = "has-error";
    }
  }

  campaignChanged(campaignId: string): void {
    console.log(campaignId);
    if (this.selectedLocation && campaignId) {
      this.selectedCampaignClass = "has-success";
    } else if (this.selectedLocation && !campaignId) {
      this.selectedCampaignClass = "has-error";
    } else {
      this.selectedCampaignClass = "";
    }
  }

  start(isGuest: boolean): void {
    if (this.selectedCampaign) {
      this.globals.isGuest = isGuest;
      this.globals.saveState(
        this.client,
        this.client.subClients.find((sc) => sc.id === this.selectedLocation),
        this.campaigns.find((camp) => camp.id === this.selectedCampaign),
        isGuest);
      this.router.navigateToRoute("entry-check");
    } else {
      toastr.error(`Complete all required fields before continuing.`);
    }
    
  }
}
