export class HouseSauna {
  private heating: boolean = false;
  private temperatur: number = 55;

  public setHeating(switchOn: boolean): void {
    this.heating = switchOn;
  }

  public isHeatingOn(): boolean {
    return this.heating;
  }

  public setTemperatur(newTemperatur: number): void {
    this.temperatur = newTemperatur;
  }

  public getTemperatur(): number {
    return this.temperatur;
  }
}
