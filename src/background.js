// Note: There's no need to call webkitNotifications.checkPermission().
// Extensions that declare the notifications permission are always
// allowed create notifications.

// Iniciando variaveis
var notificationNormal,
	notificationMinOptions,
	notificationMaxOptions,
	notificationMaxExtraOptions,
	notificationResetTimeOptions,
	alarmMin,
	alarmNormal,
	alarmMax,
	alarmMaxExtra,
	alarmResetTime;

// Limpa notificacoes
function clearNotifications() {
	clearTimeout(alarmMin);
	clearTimeout(alarmNormal);
	clearTimeout(alarmMax);
	clearTimeout(alarmMaxExtra);
	clearTimeout(alarmResetTime);
}

// Registra notificacoes
function startNotificationTimer(clock, clockRemaining) {
	if(clockRemaining.remainingTimeForMinimum >= 0)
		showMin(clock.minimumClockOut, clockRemaining.remainingTimeForMinimum)

	if(clockRemaining.remainingTime >= 0)
		showNormal(clock.normalClockOut, clockRemaining.remainingTime)

	if(clockRemaining.remainingTimeForMaximum >= 0)
		showMax(clock.maximumClockOut, clockRemaining.remainingTimeForMaximum)

	if(clockRemaining.remainingTimeForMaximumExtraTime >= 0)
		showMaxExtra(clock.maximumExtraTime, clockRemaining.remainingTimeForMaximumExtraTime)
}

// Notificacoes
function showMin(clockOut, remainingTime) {
	notificationMinOptions = {
		requireInteraction: true,
		vibrate: [200, 100, 200],
		tag: 'overtimeAlertMin',
		icon: 'assets/icon.png',
		title: 'ARRUME SUAS COISAS!',
		body: '5 MINUTOS para o HORÁRIO MÍNIMO\n' + clockOut
	}
	alarmMin = setTimeout(function() {
		new Notification(notificationMinOptions.title, notificationMinOptions)
	}, remainingTime);
}
function showNormal(clockOut, remainingTime) {
	notificationNormalOptions = {
		requireInteraction: true,
		vibrate: [200, 100, 200],
		tag: 'overtimeAlertNormal',
		icon: 'assets/icon.png',
		title: 'AINDA ESTÁ AQUI?',
		body: '5 MINUTOS para o HORÁRIO NORMAL\n' + clockOut
	}
	alarmNormal = setTimeout(function() {
		new Notification(notificationNormalOptions.title, notificationNormalOptions)
	}, remainingTime);
}
function showMax(clockOut, remainingTime) {
	notificationMaxOptions = {
		requireInteraction: true,
		vibrate: [200, 100, 200],
		tag: 'overtimeAlertMax',
		icon: 'assets/icon.png',
		title: 'ÚLTIMO AVISO!',
		body: '5 MINUTOS para o HORÁRIO MÁXIMO\n' + clockOut
	}
	alarmMax = setTimeout(function() {
		new Notification(notificationMaxOptions.title, notificationMaxOptions)
	}, remainingTime);
}
function showMaxExtra(clockOut, remainingTime) {
	notificationMaxExtraOptions = {
		requireInteraction: true,
		vibrate: [200, 100, 200],
		tag: 'overtimeAlertMaxExtra',
		icon: 'assets/icon.png',
		title: 'AGORA É POR SUA CONTA E RISCO!',
		body: '5 MINUTOS para o MÁXIMO DE EXTRA\n' + clockOut
	}
	alarmMaxExtra = setTimeout(function() {
		new Notification(notificationMaxExtraOptions.title, notificationMaxExtraOptions)
	}, remainingTime);
}
function showResetTime(clockOut, remainingTime) {
	notificationResetTimeOptions = {
		requireInteraction: true,
		vibrate: [200, 100, 200],
		tag: 'overtimeAlertResetTime',
		icon: 'assets/icon.png',
		title: 'ATENÇÃO!',
		body: 'Horário de entrada apagado\n' + clockOut
	}
	alarmResetTime = setTimeout(function() {
		new Notification(notificationResetTimeOptions.title, notificationResetTimeOptions)
	}, remainingTime);
}
