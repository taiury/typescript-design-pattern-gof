export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  get powerStatus(): string {
    return this.isOn ? "ON" : "OFF";
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está ${this.powerStatus}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora está ${this.powerStatus}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    console.log();
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity < 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}
