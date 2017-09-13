import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { Clock, ClockRemaining } from './clock';
import { Settings } from './settings';

import * as moment from 'moment';

@Injectable()
export class ClockService {
  clock: Clock;
  clockRemaining: ClockRemaining = new ClockRemaining();
  settings: Settings;

  constructor(private localStorage: LocalStorageService) {
  }

  getClock(): Clock {
    this.clock = JSON.parse(localStorage.getItem('clock'));

    if( this.clock == null )
      this.clock = new Clock();

    return this.clock;
  }

  saveClock(clock: Clock): Clock {
    this.clock = clock;
    localStorage.setItem('clock', JSON.stringify(this.clock));
    return clock;
  }

  calculateClockInOut(settings: Settings): Clock {
    this.settings = settings;
    this.clock = this.getClock();
    this.clock.clockIn = this.settings.arrivedTime;
    this.clock.normalClockOut = moment(this.clock.clockIn).add(moment.duration(this.settings.workTime)).valueOf();
    this.clock.minimumClockOut = moment(this.clock.normalClockOut).subtract(moment.duration(parseInt(this.settings.toleranceTime), 'minutes')).valueOf();
    this.clock.maximumClockOut = moment(this.clock.normalClockOut).add(moment.duration(parseInt(this.settings.toleranceTime), 'minutes')).valueOf();
    this.clock.maximumExtraTime = moment(this.clock.normalClockOut).add(moment.duration(2, 'hours')).valueOf();
    return this.saveClock(this.clock);
  }

  calculateRemainingTime() {
    let clockOut: moment.Moment = moment(this.clock.normalClockOut);
    let tolerance: moment.Duration = moment.duration(parseInt(this.settings.toleranceTime), 'minutes');

    this.clockRemaining.remainingTime = moment.duration(clockOut.diff(moment()));
    this.clockRemaining.remainingTimeForMaximumExtraTime = moment.duration(this.clockRemaining.remainingTime).add(moment.duration(2, 'hours'));
    this.clockRemaining.remainingTimeForMinimum = moment.duration(this.clockRemaining.remainingTime).subtract(tolerance);
    this.clockRemaining.remainingTimeForMaximum = moment.duration(this.clockRemaining.remainingTime).add(tolerance);
    this.clockRemaining.remainingTimeEnabled = (this.clockRemaining.remainingTimeForMaximumExtraTime.asMinutes() > 0) ? true : false;
  }

  calculateRemainingProgressWidth() {
    let totalTime: moment.Duration = moment.duration(this.settings.workTime).add(moment.duration(2, 'hours'));
    let width: string = '100%';
    if(this.clockRemaining.remainingTime.asMinutes() > 0 ) {
      width = Math.ceil((1 - (this.clockRemaining.remainingTime.asMinutes() / totalTime.asMinutes())) * 100) + '%'
    }
    this.clockRemaining.remainingTimeProgressWidth = width;
  }

  getHoursMinutesText(timeToCalc: moment.Duration): string {
    let text:string = '';

    if(timeToCalc.hours() > 0) {
      text += timeToCalc.hours() + 'h';
    }

    if(timeToCalc.minutes() > 0) {
      text += timeToCalc.minutes() + 'min para o seu ';
    }

    return text;
  }

  calculateRemainingTimeText() {
    let tolerance: moment.Duration = moment.duration(parseInt(this.settings.toleranceTime), 'minutes');
    let remainingTimeText = '';
    let remainingTimeProgressColor = 'bg-info';

    if(this.clockRemaining.remainingTimeForMaximumExtraTime.valueOf() > 0) {
      if(this.clockRemaining.remainingTimeForMinimum.valueOf() >= 0 && tolerance.valueOf() > 0) {
        remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTimeForMinimum) + 'Horário Mínimo';
      } else if(this.clockRemaining.remainingTime.valueOf() >= 0) {
        remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTime) + 'Horário Normal';
        remainingTimeProgressColor = 'bg-success';
      } else if(this.clockRemaining.remainingTimeForMaximum.valueOf() >= 0 && tolerance.valueOf() > 0) {
        remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTimeForMaximum) + 'Horário Máximo';
        remainingTimeProgressColor = 'bg-warning';
      } else if(this.clockRemaining.remainingTimeForMaximumExtraTime.valueOf() >= 0) {
        remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTimeForMaximumExtraTime) + 'Máximo de Hora Extra';
        remainingTimeProgressColor = 'bg-danger';
      }
    }

    this.clockRemaining.remainingTimeText = remainingTimeText;
    this.clockRemaining.remainingTimeProgressColor = remainingTimeProgressColor;
  }

  getRemainingClockOut(): ClockRemaining {
    this.calculateRemainingTime();
    this.calculateRemainingProgressWidth();
    this.calculateRemainingTimeText();

    return this.clockRemaining;
  }
}
