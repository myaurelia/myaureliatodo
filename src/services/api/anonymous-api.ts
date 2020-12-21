import { autoinject } from 'aurelia-framework';
import { HttpClient, json } from "aurelia-fetch-client";

@autoinject
export class AnonymousApi {
  private api: HttpClient
  private defaultPrefix = "api";

  constructor() {
    const url = "b2w";
  }
}
