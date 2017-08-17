import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { Clock } from './clock';
import { Settings } from './settings';

import * as moment from 'moment';

@Injectable()
export class ClockService {
  clock: Clock;
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
    this.saveClock(this.clock);
    return this.clock;
  }

  getRemainingClockOut(): { remainingTime: string; relativeWidth: string; } {
    let timeNow: moment.Moment = moment();
    let clockOut: moment.Moment = moment(this.clock.normalClockOut);
    let remainingTime: moment.Duration = moment.duration(clockOut.diff(timeNow));
    let totalTime: moment.Duration = moment.duration(this.settings.workTime);
    let relativeWidth: string = Math.floor((remainingTime.asMinutes() / totalTime.asMinutes()) * 100) + '%';
    let remainingTimeFormatted = '';
    if(remainingTime.hours() > 0) {
      remainingTimeFormatted += remainingTime.hours() + 'h';
    }
    remainingTimeFormatted += remainingTime.minutes() + 'min';

    return {
      remainingTime: remainingTimeFormatted,
      relativeWidth: relativeWidth
    };
  }
}
