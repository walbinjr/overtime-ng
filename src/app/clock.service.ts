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

  getRemainingClockOut(): ClockRemaining {
    let clockOut: moment.Moment = moment(this.clock.normalClockOut);

    let tolerance: moment.Duration = moment.duration(parseInt(this.settings.toleranceTime), 'minutes');
    let remainingTime: moment.Duration = moment.duration(clockOut.diff(moment()));
    let remainingTimeForMaximumExtraTime: moment.Duration = moment.duration(remainingTime).add(moment.duration(2, 'hours'));

    let remainingTimeForMinimum: moment.Duration = moment.duration(remainingTime).subtract(tolerance);
    let remainingTimeForMaximum: moment.Duration = moment.duration(remainingTime).add(tolerance);

    let totalTime: moment.Duration = moment.duration(this.settings.workTime).add(moment.duration(2, 'hours'));
    let remainingTimeProgressWidth: string = (remainingTimeForMaximumExtraTime.asMinutes() > 0 ) ? Math.floor((1 - (remainingTime.asMinutes() / totalTime.asMinutes())) * 100) + '%' : '100%';
    let remainingTimeText = '';
    let remainingTimeProgressColor = 'bg-info';

    if(remainingTimeForMaximumExtraTime.valueOf() > 0) {
      if(tolerance.valueOf() > 0 && remainingTimeForMinimum.valueOf() > 0) {
        if(remainingTime.hours() > 0) {
          remainingTimeText += remainingTimeForMinimum.hours() + 'h';
        }
        remainingTimeText += remainingTimeForMinimum.minutes() + 'min para o seu Horário Mínimo';
      } else if(remainingTime.valueOf() > 0) {
        if(remainingTime.hours() > 0) {
          remainingTimeText += remainingTime.hours() + 'h';
        }
        remainingTimeText += remainingTime.minutes() + 'min para o seu Horário';
        remainingTimeProgressColor = 'bg-success';
      } else if(tolerance.valueOf() > 0 && remainingTimeForMaximum.valueOf() > 0) {
        remainingTimeText += remainingTimeForMaximum.minutes() + 'min para o seu Horário Máximo';
        remainingTimeProgressColor = 'bg-warning';
      } else if(remainingTimeForMaximumExtraTime.valueOf() > 0) {
        if(remainingTimeForMaximumExtraTime.hours() > 0) {
          remainingTimeText += remainingTimeForMaximumExtraTime.hours() + 'h';
        }
        remainingTimeText += remainingTimeForMaximumExtraTime.minutes() + 'min para o Máximo de Hora Extra';
        remainingTimeProgressColor = 'bg-danger';
      }
    }


    console.log(tolerance.asMinutes());
    console.log(remainingTime.asMinutes());
    console.log(remainingTimeForMinimum.asMinutes());
    console.log(remainingTimeForMaximum.asMinutes());
    console.log(remainingTimeForMaximumExtraTime.asMinutes());
    console.log(totalTime.asMinutes());

    this.clockRemaining.remainingTimeText = remainingTimeText;
    this.clockRemaining.remainingTimeProgressWidth = remainingTimeProgressWidth;
    this.clockRemaining.remainingTimeProgressColor = remainingTimeProgressColor;
    this.clockRemaining.remainingTimeEnabled = (remainingTimeForMaximumExtraTime.asMinutes() > 0) ? true : false;

    console.log(this.clockRemaining);

    return this.clockRemaining;
  }
}
