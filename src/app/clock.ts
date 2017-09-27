import * as moment from 'moment';

export class Clock {
  clockIn: number = 0;
  minimumClockOut: number = 0;
  normalClockOut: number = 0;
  maximumClockOut: number = 0;
  maximumExtraTime: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  // formatedJson() {
  //   return {
  //     minimumClockOut: moment(this.minimumClockOut).format('HH:mm'),
  //     normalClockOut: moment(this.normalClockOut).format('HH:mm'),
  //     maximumClockOut: moment(this.maximumClockOut).format('HH:mm'),
  //     maximumExtraTime: moment(this.maximumExtraTime).format('HH:mm')
  //   }
  // }
}

export class ClockRemaining {
  remainingTimeText: string;
  remainingTimeProgressWidth: string;
  remainingTimeProgressEnabled: boolean = false;
  remainingTimeProgressColor: string = '';
  remainingTimeEnabled: boolean = false;
  remainingTime: moment.Duration;
  remainingTimeForMaximumExtraTime: moment.Duration;
  remainingTimeForMinimum: moment.Duration;
  remainingTimeForMaximum: moment.Duration;

  formatedJson() {
    return {
      remainingTime: this.remainingTime.asMilliseconds(),
      remainingTimeForMaximumExtraTime: this.remainingTimeForMaximumExtraTime.asMilliseconds(),
      remainingTimeForMinimum: this.remainingTimeForMinimum.asMilliseconds(),
      remainingTimeForMaximum: this.remainingTimeForMaximum.asMilliseconds()
    }
  }
}
