import { Component } from './component';
import { Container } from './container';
import { Option } from './option';
import { Params } from './params';

export class App {

  public message = 'Hello World!';
  public longMessage = '';
  public container: Container;
  public component: Component;
  public vm: any;

  constructor() {
    for (let i: number = 0; i < 100000; i++) {
      this.longMessage += `I like potatoes. `;
    }

    this.container = this.setupContainer();
    this.component = this.setupComponent();

    console.log({ container: this.container });
    console.log({ component: this.component });
  }

  setupContainer(): Container {
    const container =
    {
      id: `grid1`,
      col: `col`,
      colsmall: `col-sm-6`
    };
    return container;
  }

  private setupOptions(): Option[] {
    const option0 = new Option()
    {
      label: `-- Select --`;
      value: ``;
    };
    const option1 = new Option()
    {
      label: `Uno`;
      value: `1`;
    };
    const option2 = new Option()
    {
      label: `Dos`;
      value: `2`;
    };
    const option3 = new Option()
    {
      label: `Tres`;
      value: `3`;
    }
    return [option0, option1, option2, option3];
  }

  private setupParams(): Params {
    const params =
    {
      label: `Primer menu desplegable`,
      helpText: `Elija un numero de la lista`,
      required: true,
      errorText: `Debes seleccionar una opcion`,
      options: this.setupOptions()
    }
    return params;
  }

  private setupComponent(): Component {
    const component =
    {
      type: `dropdown`,
      target: `grid1`,
      params: this.setupParams()
    }
    return component;
  }

  private createNewGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
