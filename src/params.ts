import { Option } from "option";

export interface Params {
  label: string;
  helpText: string;
  required: boolean;
  errorText: string;
  options: Option[];
}
