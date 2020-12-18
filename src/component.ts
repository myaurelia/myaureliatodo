import { Params } from "params";

export interface Component {
  type: string;
  target: string;
  params: Params;
}
