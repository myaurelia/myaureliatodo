import { autoinject, observable, bindable, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';

@autoinject
export class Header {
  private clientId: string;
  private homeLinkText: string;
  private issuesText: string;
  private issueLinkText: string;
  private guestLabel: string;
  private registeredUserLabel: string;

  constructor(private globals: Globals, private be: BindingEngine) {
    this.customTextLoaded(this.globals.customTextLoaded);
    this.be
      .propertyObserver(globals, 'customTextLoaded')
      .subscribe((newValue: boolean) => {
        this.customTextLoaded(newValue);
      });
      this.be
      .propertyObserver(globals, 'breadcrumbLabel')
      .subscribe((newValue: string) => {
        this.breadcrumbLoaded(newValue);
      });
  }

  breadcrumbLoaded(newValue: string) {
    this.registeredUserLabel = newValue;
  }

  customTextLoaded(newValue: boolean) {
    if (newValue) {
      this.homeLinkText = this.globals.findCustomText("HomeLink");
      this.issuesText = this.globals.findCustomText("HavingIssues");
      this.issueLinkText = this.globals.findCustomText("ReportProblem");
      this.guestLabel = this.globals.findCustomText("Visitor");
      this.registeredUserLabel = this.globals.findCustomText("Employee");
    }
  }
}
