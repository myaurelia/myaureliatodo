import { autoinject, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';

@autoinject
export class Footer {
  private tosLinkText: string;
  private ppLinkText: string;

  constructor(private globals: Globals, private be: BindingEngine) {
    this.customTextLoaded(this.globals.customTextLoaded);
    this.be
      .propertyObserver(globals, 'customTextLoaded')
      .subscribe((newValue: boolean) => {
        this.customTextLoaded(newValue);
      });
  }

  async activate(params): Promise<boolean> {
    return true;
  }

  customTextLoaded(newValue: boolean) {
    if (newValue) {
      this.tosLinkText = this.globals.findCustomText("TermsOfUse");
      this.ppLinkText = this.globals.findCustomText("PrivacyPolicy");
    }
  }
}
