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
}
