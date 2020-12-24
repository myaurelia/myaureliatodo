import { autoinject, observable, bindable } from 'aurelia-framework';
import { CustomText } from './models/custom-text';

@autoinject
export class Globals {
  @bindable public clientId: string = "";
  @bindable public customTextLoaded: boolean = false;

  public apiRoot: string = "";
  public customTextList: CustomText[] = [];

  constructor() {
    this.apiRoot = eval("b2wApiUrlBase");
  }

  findCustomText(code: string): string {
    const translatedText = this.customTextList.find((text) => {
      return text.code === code;
    });
    if (translatedText) {
      return translatedText.text;
    }
    return `[[${code}] code not found.]`;
  }
};
