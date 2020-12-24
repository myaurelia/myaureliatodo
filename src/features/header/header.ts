import { autoinject, observable, bindable, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';

@autoinject
export class Header {
  private clientId: string;
  private homeLinkText: string;
  private issuesText: string;
  private issueLinkText: string;

  constructor(private globals: Globals, private be: BindingEngine) {
    this.customTextLoaded(this.globals.customTextLoaded);
    this.clientIdLoaded(this.globals.clientId);
    this.be
      .propertyObserver(globals, 'clientId')
      .subscribe((newValue) => {
        this.clientIdLoaded(newValue)
      });
    this.be
      .propertyObserver(globals, 'customTextLoaded')
      .subscribe((newValue: boolean) => {
        this.customTextLoaded(newValue);
      });
  }

  customTextLoaded(newValue: boolean) {
    if (newValue) {
      this.homeLinkText = this.globals.findCustomText("HomeLink");
      this.issuesText = this.globals.findCustomText("HavingIssues");
      this.issueLinkText = this.globals.findCustomText("ReportProblem");
    }
  }

  clientIdLoaded(newValue) {
    if (newValue) {
      this.clientId = newValue;
    }
  }


}
