import { NameValues } from "./name-values";

export interface SubClient {
  id: string;
  clientId: string;
  subClientName: string;
  isActive: boolean;
  locationId: string;
  locationName: string;
  city: string;
  state: string;
  street1: string;
  street2: string;
  zip: string;
  nameValues: NameValues;
}
