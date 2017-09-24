// Note: There's no need to call webkitNotifications.checkPermission().
// Extensions that declare the notifications permission are always
// allowed create notifications.

// Create a simple text notification:
var notificationRegularOptions, notificationMinOptions, notificationMaxOptions, notificationMaxExtraOptions, notificationResetTimeOptions,
	notificationRegular, notificationMin, notificationMax, notificationMaxExtra, notificationResetTime,
	alarm, alarmMin, alarmReg, alarmMax, alarmMaxExtra, alarmResetTime, alarmPerm;

function twoDigits(string) {
	var collection = ("00" + string).split("");
	return collection[collection.length - 2] + collection[collection.length - 1];
};
function timeAsString(time) {
	return time.getHours() + ":" + twoDigits(time.getMinutes());
};
function creationCallback(createdId) {
	console.log('Criado: ' + createdId);
}
function clearTimers() {
	clearTimeout(alarmMin);
	clearTimeout(alarmReg);
	clearTimeout(alarmMax);
	clearTimeout(alarmMaxExtra);
	clearTimeout(alarmResetTime);
	clearTimeout(alarmPerm);
}
function startNotificationTimer(clockRemaining) {
	console.log(clockRemaining.remainingTime.asMilliseconds());
	notificationMinOptions = {
		tag: 'overtimeAlertMin',
		icon: 'assets/icon.png',
		title: '5min para o Horário Mínimo',
		body: 'ARRUME SUAS COISAS!'
	}
	setTimeout(function(){
		new Notification(notificationMinOptions.title, notificationMinOptions);
	}, 3000);
}
function startTimer(alarmRemains, minTime, regularTime, maxTime, maxTimeExtra, minutosExtraInMili) {
	alarm = alarmRemains;
	var fiveMinutes = (5 * 60 * 1000);
	var twoHours = (120 * 60 * 1000);
	var calcMin = alarm - minutosExtraInMili - fiveMinutes;
	var calcReg = alarm - fiveMinutes;
	var calcMax = alarm + minutosExtraInMili - fiveMinutes;
	var calcMaxExtra = alarm + twoHours - fiveMinutes;
	var calcResetTime = alarm + twoHours;
	//alert(calcMin/1000/60 + " : " + calcReg/1000/60 + " : " + calcMax/1000/60 + " : " + calcMaxExtra/1000/60);
	if(calcMin > 0 && minutosExtraInMili > 0) {
		notificationMinOptions = {
			tag: 'overtimeAlertMin',
			icon: 'assets/images/overtime.png',
			title: '5min para o Horário Mínimo: ' + minTime,
			body: 'ARRUME SUAS COISAS!'
		}
		alarmMin = setTimeout(showMin, calcMin);
	}
	
	if(calcReg > 0) {
		notificationRegularOptions = {
			tag: 'overtimeAlertRegular',
			icon: 'assets/images/overtime.png',
			title: '5min para o Horário Normal: ' + regularTime,
			body: 'AINDA ESTÁ AQUI?'
		}
		alarmReg = setTimeout(showRegular, calcReg);
	}

	if(calcMax > 0 && minutosExtraInMili > 0) {
		notificationMaxOptions = {
			tag: 'overtimeAlertMax',
			icon: 'assets/images/overtime.png',
			title: '5min para o Horário Máximo: ' + maxTime,
			body: 'ÚLTIMO AVISO!'
		}
		alarmMax = setTimeout(showMax, calcMax);
	}

	if(calcMaxExtra > 0) {
		notificationMaxExtraOptions = {
			tag: 'overtimeAlertMaxExtra',
			icon: 'assets/images/overtime.png',
			title: '5min para o Máximo de Extra: ' + maxTimeExtra,
			body: 'AGORA É POR SUA CONTA E RISCO!'
		}
		alarmMaxExtra = setTimeout(showMaxExtra, calcMaxExtra);
	}

	if(calcResetTime > 0) {
		notificationResetTimeOptions = {
			tag: 'overtimeAlertResetTime',
			icon: 'assets/images/overtime.png',
			title: 'Horário de entrada apagado',
			body: 'ATÉ AMANHÃ!'
		}
		alarmResetTime = setTimeout(showResetTime, calcResetTime);
	}

	//alarmPerm = setTimeout(updateBadge, 60000); // 1 min
}

// Then show the notification.
function showMin(){
	notificationMin = new Notification(notificationMinOptions.title, notificationMinOptions);
	clearTimeout(alarmMin);
}
function showRegular(){
	notificationMin.close();
	notificationRegular = new Notification(notificationRegularOptions.title, notificationRegularOptions);
	clearTimeout(alarmReg);
}
function showMax(){
	notificationRegular.close();
	notificationMax = new Notification(notificationMaxOptions.title, notificationMaxOptions);
	clearTimeout(alarmMax);
}
function showMaxExtra(){
	notificationMax.close();
	notificationMaxExtra = new Notification(notificationMaxExtraOptions.title, notificationMaxExtraOptions);
	clearTimeout(alarmMaxExtra);
}
function showResetTime(){
	notificationMaxExtra.close();
	window.localStorage.removeItem('time');
	chrome.browserAction.setBadgeText({ text: '' });
	notificationResetTime = new Notification(notificationResetTimeOptions.title, notificationResetTimeOptions);
	clearTimeout(alarmResetTime);
}
function updateBadge(){
	var remaining = (alarm - (10 * 60 * 1000)) - (1 * 60 * 1000);

	if( remaining > -1800000 ) {
		var timeBadge = new Date();
		timeBadge.setHours(0,0);
		timeBadge = new Date(timeBadge.getTime() + remaining);

		chrome.browserAction.setBadgeText({ text: timeAsString(timeBadge) });
	} else {
		clearTimeout(alarmPerm);
	}
}
