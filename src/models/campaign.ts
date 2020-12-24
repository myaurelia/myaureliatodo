export interface Campaign {
  id: string;
  campName: string;
  conditionSampleCheck: boolean;
  covid: boolean;
  covidVaccine: boolean;
  covidVaccineLots: object[];
  covidVaccineType: string;
  defaultCampaign: boolean;
  employeeIdRequired: boolean;
  failMessage: string;
  flu: boolean;
  includeWeekend: boolean;
  insuranceFlag: boolean;
  notifyQuestionsResults: boolean;
  questionFailMessage: string;
  questions: boolean;
  rescanValidForHours: number;
  subClientId: string;
  subClientName: string;
  temp: boolean;
  threshold: number;
  validForDays: number;
}
