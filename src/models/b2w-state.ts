import { SubClient, Client, Campaign } from './models';

export interface B2WState {
  isGuest: boolean,
  client: Client,
  location: SubClient,
  campaign: Campaign,
}
