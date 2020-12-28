import { AnonymousApi } from 'services/api/anonymous-api';
import { autoinject, bindable, BindingEngine } from 'aurelia-framework';
import { Globals } from '../../globals';
import { Router } from 'aurelia-router';

@autoinject
export class EntryCheck {
  private firstName: string;
  private firstNameClass: string;
  private firstNameLabel: string;
  private firstNameRequired: string;
  private lastName: string;
  private lastNameClass: string;
  private lastNameLabel: string;
  private lastNameRequired: string;
  private dateOfBirth: string;
  private dateOfBirthClass: string;
  private dateOfBirthLabel: string;
  private dateOfBirthRequired: string;
  private dateOfBirthIncorrect: string;
  private dateOfBirthInvalid: string;
  private EmployeeIdLabel: string;
  private CompanyNameLabel: string;
  private nextButtonLabel: string;

  constructor(
    private api: AnonymousApi,
    private globals: Globals,
    private be: BindingEngine,
    private router: Router) {
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

  customTextLoaded(newValue: boolean): void {
    if (newValue) {
      this.firstNameLabel = this.globals.findCustomText("FirstName");
      this.firstNameRequired = this.globals.findCustomText("FirstNameRequired");
      this.lastNameLabel = this.globals.findCustomText("LastName");
      this.lastNameRequired = this.globals.findCustomText("LastNameRequired");
      this.dateOfBirthLabel = this.globals.findCustomText("DateOfBirth");
      this.dateOfBirthRequired = this.globals.findCustomText("DateOfBirthRequired");
      this.dateOfBirthIncorrect = this.globals.findCustomText("DateOfBirthIncorrect");
      this.dateOfBirthInvalid = this.globals.findCustomText("DateOfBirthInvalid");
      this.CompanyNameLabel = this.globals.findCustomText("CompanyName");
      this.EmployeeIdLabel = this.globals.findCustomText("EmployeeId");
      this.nextButtonLabel = this.globals.findCustomText("NextButton");
    }
  }
}
