export class Settings {
  workTime: string = '';
  toleranceTime: string = '';
  checkSaturdayHoliday: boolean = false;
  arrivedTime: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
