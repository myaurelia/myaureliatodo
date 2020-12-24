import { SubClient } from './sub-client';

export interface Client {
  id: string;
  clientName: string;
  image: string;
  subClients: SubClient[];
  type: string;
  sortOrder: number;
  value: string;
}
