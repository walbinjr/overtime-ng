import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  alarmMin;
  alarmNormal;
  alarmMax;
  alarmMaxExtra;
  alarmResetTime;

  constructor() { }

  // Limpa notificacoes
  clearNotifications() {
    clearTimeout(this.alarmMin);
    clearTimeout(this.alarmNormal);
    clearTimeout(this.alarmMax);
    clearTimeout(this.alarmMaxExtra);
    clearTimeout(this.alarmResetTime);
  }

  // Registra notificacoes
  startNotificationTimer(clock, clockRemaining) {
    let remainingMin = clockRemaining.remainingTimeForMinimum - clockRemaining.notificationTimeBefore;
    if(remainingMin >= 0)
      this.showMin(clock.minimumClockOut, remainingMin);

    let remainingNormal = clockRemaining.remainingTime - clockRemaining.notificationTimeBefore;
    if(remainingNormal >= 0)
      this.showNormal(clock.normalClockOut, remainingNormal);

    let remainingMax = clockRemaining.remainingTimeForMaximum - clockRemaining.notificationTimeBefore;
    if(remainingMax >= 0)
      this.showMax(clock.maximumClockOut, remainingMax);

    let remainingMaxExtra = clockRemaining.remainingTimeForMaximumExtraTime - clockRemaining.notificationTimeBefore;
    if(remainingMaxExtra >= 0)
      this.showMaxExtra(clock.maximumExtraTime, remainingMaxExtra);
  }

  // Notificacoes
  showMin(clockOut, remainingTime) {
    let notificationMinOptions = {
      requireInteraction: true,
      vibrate: [200, 100, 200],
      tag: 'overtimeAlertMin',
      icon: 'assets/icon.png',
      title: 'ARRUME SUAS COISAS!',
      body: '5 MINUTOS para o HORÁRIO MÍNIMO\n' + clockOut
    }
    this.alarmMin = setTimeout(function() {
      new Notification(notificationMinOptions.title, notificationMinOptions);
    }, remainingTime);
  }

  showNormal(clockOut, remainingTime) {
    let notificationNormalOptions = {
      requireInteraction: true,
      vibrate: [200, 100, 200],
      tag: 'overtimeAlertNormal',
      icon: 'assets/icon.png',
      title: 'AINDA ESTÁ AQUI?',
      body: '5 MINUTOS para o HORÁRIO NORMAL\n' + clockOut
    }
    this.alarmNormal = setTimeout(function() {
      new Notification(notificationNormalOptions.title, notificationNormalOptions);
    }, remainingTime);
  }
  showMax(clockOut, remainingTime) {
    let notificationMaxOptions = {
      requireInteraction: true,
      vibrate: [200, 100, 200],
      tag: 'overtimeAlertMax',
      icon: 'assets/icon.png',
      title: 'ÚLTIMO AVISO!',
      body: '5 MINUTOS para o HORÁRIO MÁXIMO\n' + clockOut
    }
    this.alarmMax = setTimeout(function() {
      new Notification(notificationMaxOptions.title, notificationMaxOptions);
    }, remainingTime);
  }
  showMaxExtra(clockOut, remainingTime) {
    let notificationMaxExtraOptions = {
      requireInteraction: true,
      vibrate: [200, 100, 200],
      tag: 'overtimeAlertMaxExtra',
      icon: 'assets/icon.png',
      title: 'AGORA É POR SUA CONTA E RISCO!',
      body: '5 MINUTOS para o MÁXIMO DE EXTRA\n' + clockOut
    }
    this.alarmMaxExtra = setTimeout(function() {
      new Notification(notificationMaxExtraOptions.title, notificationMaxExtraOptions);
    }, remainingTime);
  }
  showResetTime(clockOut, remainingTime) {
    let notificationResetTimeOptions = {
      requireInteraction: true,
      vibrate: [200, 100, 200],
      tag: 'overtimeAlertResetTime',
      icon: 'assets/icon.png',
      title: 'ATENÇÃO!',
      body: 'Horário de entrada apagado\n' + clockOut
    }
    this.alarmResetTime = setTimeout(function() {
      new Notification(notificationResetTimeOptions.title, notificationResetTimeOptions);
    }, remainingTime);
  }

}
