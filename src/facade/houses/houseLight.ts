export class HouseLight {
  private room1LightOn: boolean = false;

  public doRoom1LightOn(switchOn: boolean) {
    this.room1LightOn = switchOn;
  }

  public isRoomLightOn(): boolean {
    return this.room1LightOn;
  }
}
