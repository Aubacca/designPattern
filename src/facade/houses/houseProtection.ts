export class HouseProtection {
  private protection: boolean = true;

  public setProtection(switchOn: boolean) {
    this.protection = switchOn;
  }

  public isProtectionOn(): boolean {
    return this.protection;
  }
}
