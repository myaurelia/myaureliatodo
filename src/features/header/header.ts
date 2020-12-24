import { autoinject, observable, bindable, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';

@autoinject
export class Header {
  private clientId: string;
  private homeLinkText: string;
  private issuesText: string;
  private issueLinkText: string;
  private isGuestLabel: string;
  private isVisitorLabel: string;

  constructor(private globals: Globals, private be: BindingEngine) {
    this.customTextLoaded(this.globals.customTextLoaded);
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
      this.isGuestLabel = this.globals.findCustomText("Visitor");
      this.isVisitorLabel = this.globals.findCustomText("Employee");
    }
  }
}
