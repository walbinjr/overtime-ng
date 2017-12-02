webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"clearfix\">\r\n    <h2 class=\"m-2 text-center float-left\">Time to go!</h2>\r\n    <button type=\"button\" class=\"mt-3 float-right btn btn-secondary btn-sm\" (click)=\"clockForm.invalid || toggleSettings($event)\" [ngClass]=\"{'active':showSettings}\">Configurações</button>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header bg-warning\" *ngIf=\"hasSaturdayHoliday\">\r\n      <strong class=\"has-warning form-control-warning\">Feriado no próximo Sábado!</strong>\r\n    </div>\r\n\r\n    <div class=\"card-header bg-danger\" *ngIf=\"!remainingClockOut.remainingTimeEnabled && lastUpdateTime != ''\">\r\n      <strong class=\"has-danger form-control-danger text-white\">Horário definido {{lastUpdateTime}}!</strong>\r\n    </div>\r\n\r\n    <form class=\"card-block bg-faded pb-0\" #clockForm=\"ngForm\" (submit)=\"saveArrivedTime()\">\r\n      <div class=\"form-group row no-gutters\" *ngIf=\"showSettings\" [ngClass]=\"{'has-danger':workTimeCheck.invalid}\">\r\n        <label class=\"col-5 col-form-label\">Carga horária diária:</label>\r\n        <div class=\"col-5 d-flex\">\r\n          <input tabindex=\"1\" class=\"form-control\" type=\"time\" required appTimeValidator=\"HH:mm\" [(ngModel)]=\"settings.workTime\" name=\"settings.workTime\" #workTimeCheck=\"ngModel\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row no-gutters\" *ngIf=\"showSettings\" [ngClass]=\"{'has-danger':toleranceCheck.invalid}\">\r\n        <label class=\"col-5 col-form-label\">Tolerância:</label>\r\n        <div class=\"col-3 d-flex\">\r\n          <input tabindex=\"2\" class=\"form-control\" type=\"number\" min=\"0\" max=\"30\" required appTimeValidator=\"m\" [(ngModel)]=\"settings.toleranceTime\" name=\"settings.toleranceTime\" #toleranceCheck=\"ngModel\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row no-gutters\" *ngIf=\"showSettings\">\r\n        <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"settings.checkSaturdayHoliday\" name=\"settings.checkSaturdayHoliday\" (ngModelChange)=\"saveSettings()\">\r\n          Verificar feriados aos sábados?\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group row no-gutters\" [ngClass]=\"{'has-danger':arrivedTimeCheck.invalid}\">\r\n        <div class=\"col d-flex\">\r\n          <label class=\"col-form-label mr-2\">Entrada: </label>\r\n          <input tabindex=\"3\" class=\"form-control mr-2\" type=\"time\" [(ngModel)]=\"arrivedTime\" name=\"arrivedTime\" #arrivedTimeCheck=\"ngModel\" required appTimeValidator=\"HH:mm\" />\r\n          <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"clockForm.invalid\">Calcular</button>\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"card-block\" *ngIf=\"remainingClockOut.remainingTimeEnabled\">\r\n      <div class=\"alert alert-info\" id=\"min_time_container\" *ngIf=\"hasToleranceTime\">\r\n        <div class=\"clearfix\">\r\n          <div class=\"float-left\">Mínimo:</div>\r\n          <div class=\"float-right font-weight-bold\" id=\"min_time\">{{minimumClockOut}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"alert alert-success\">\r\n        <div class=\"clearfix\">\r\n          <div class=\"float-left\">Normal:</div>\r\n          <div class=\"float-right font-weight-bold\" id=\"regular_time\">{{normalClockOut}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"alert alert-warning\" id=\"max_time_container\" *ngIf=\"hasToleranceTime\">\r\n        <div class=\"clearfix\">\r\n          <div class=\"float-left\">Máximo:</div>\r\n          <div class=\"float-right font-weight-bold\" id=\"max_time\">{{maximumClockOut}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"alert alert-danger mb-0\">\r\n        <div class=\"clearfix\">\r\n          <div class=\"float-left\">Máximo de Extra:</div>\r\n          <div class=\"float-right font-weight-bold\" id=\"max_extra_time\">{{maximumExtraTime}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row mt-3 mb-3\" *ngIf=\"remainingClockOut.remainingTimeEnabled\">\r\n    <div class=\"col\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated p-4\" role=\"progressbar\" [ngClass]=\"remainingClockOut.remainingTimeProgressColor\" [ngStyle]=\"{'width':remainingClockOut.remainingTimeProgressWidth}\"></div>\r\n        <span class=\"my-progress-text text-center font-weight-bold pt-3\">{{remainingClockOut.remainingTimeText}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p>Powered by <i>@walbinjr - </i><a href=\"http://wbjr.me\" target=\"_blank\"><i>wbjr.me</i></a></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_data_service__ = __webpack_require__("../../../../../src/app/settings-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clock__ = __webpack_require__("../../../../../src/app/clock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clock_service__ = __webpack_require__("../../../../../src/app/clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(settingsDataService, clockService, notificationService) {
        this.settingsDataService = settingsDataService;
        this.clockService = clockService;
        this.notificationService = notificationService;
        this.showSettings = false;
        this.settings = new __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */]();
        this.clock = new __WEBPACK_IMPORTED_MODULE_3__clock__["a" /* Clock */]();
        this.arrivedTime = '';
        this.lastUpdateTime = '';
        this.remainingClockOut = {};
        this.normalClockOut = '--:--';
        this.minimumClockOut = '--:--';
        this.maximumClockOut = '--:--';
        this.maximumExtraTime = '--:--';
        this.hasToleranceTime = false;
        this.hasSaturdayHoliday = false;
        this.settings = this.settingsDataService.getSettings();
        this.clock = this.clockService.getClock();
        this.loadSettings();
    }
    AppComponent.prototype.loadSettings = function () {
        __WEBPACK_IMPORTED_MODULE_6_moment__["locale"]('pt-br');
        if (this.settings.arrivedTime) {
            this.arrivedTime = __WEBPACK_IMPORTED_MODULE_6_moment__(this.settings.arrivedTime).format('HH:mm');
            this.lastUpdateTime = __WEBPACK_IMPORTED_MODULE_6_moment__(this.settings.lastUpdate).fromNow();
            this.loadClock();
        }
        else {
            this.showSettings = true;
        }
    };
    AppComponent.prototype.toggleSettings = function (event) {
        this.showSettings = !this.showSettings;
        if (!this.showSettings) {
            this.saveSettings();
        }
    };
    AppComponent.prototype.saveArrivedTime = function () {
        var arrived = __WEBPACK_IMPORTED_MODULE_6_moment__(this.arrivedTime, 'HH:mm');
        var isFuture = (__WEBPACK_IMPORTED_MODULE_6_moment__().diff(arrived) < 0) ? true : false;
        // Para corrigir bug na notificacao de quem entra depois das 16h
        if (isFuture) {
            arrived.subtract(1, 'day');
        }
        this.settings.arrivedTime = arrived.valueOf();
        this.saveSettings();
    };
    AppComponent.prototype.resetSettings = function () {
        this.settings = new __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */]();
        this.saveSettings();
    };
    AppComponent.prototype.saveSettings = function () {
        this.settings.lastUpdate = __WEBPACK_IMPORTED_MODULE_6_moment__().valueOf();
        this.settingsDataService.saveSettings(this.settings);
        this.loadClock();
    };
    AppComponent.prototype.loadClock = function () {
        this.clock = this.clockService.calculateClockInOut(this.settings);
        this.normalClockOut = this.clock.formatedJson().normalClockOut;
        this.minimumClockOut = this.clock.formatedJson().minimumClockOut;
        this.maximumClockOut = this.clock.formatedJson().maximumClockOut;
        this.maximumExtraTime = this.clock.formatedJson().maximumExtraTime;
        this.remainingClockOut = this.clockService.getRemainingClockOut();
        this.hasToleranceTime = parseInt(this.settings.toleranceTime) > 0;
        this.startClockChrome();
    };
    AppComponent.prototype.startClockChrome = function () {
        var _this = this;
        console.log(this.clock.formatedJson());
        // console.log(this.clock);
        console.log(this.remainingClockOut.formatedJson());
        // console.log(this.remainingClockOut);
        if (typeof chrome !== 'undefined' && chrome.extension) {
            // console.log("chrome.extension");
            // console.log(this.clock.formatedJson());
            // console.log(this.clock);
            // console.log(this.remainingClockOut.formatedJson());
            // console.log(this.remainingClockOut);
            chrome.extension.getBackgroundPage().clearNotifications();
            chrome.extension.getBackgroundPage().startNotificationTimer(this.clock.formatedJson(), this.remainingClockOut.formatedJson(), this.hasToleranceTime);
        }
        else {
            //   console.log("chrome.web");
            //   console.log(this.remainingClockOut);
            Notification.requestPermission().then(function (result) {
                // console.log(result);
                if (result == 'granted') {
                    // navigator.serviceWorker.getRegistration().then(function(reg) {
                    //   reg.showNotification('Vibration Sample', {
                    //     body: 'Buzz! Buzz!',
                    //     badge: 'assets/icon.png',
                    //     icon: 'assets/icon.png',
                    //     vibrate: [200, 100, 200, 100, 200, 100, 200],
                    //     tag: 'vibration-sample'
                    //   });
                    // });
                    _this.notificationService.clearNotifications();
                    _this.notificationService.startNotificationTimer(_this.clock.formatedJson(), _this.remainingClockOut.formatedJson(), _this.hasToleranceTime);
                }
            });
            // let notificationResetTimeOptions = {
            //   tag: 'overtimeAlertResetTime',
            //   icon: 'assets/icon.png',
            //   title: 'Horário de entrada apagado',
            //   body: 'ATÉ AMANHÃ!'
            // }
            // setTimeout(function(){
            //   new Notification(notificationResetTimeOptions.title, notificationResetTimeOptions);
            // }, 3000);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__settings_data_service__["a" /* SettingsDataService */], __WEBPACK_IMPORTED_MODULE_4__clock_service__["a" /* ClockService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__settings_data_service__["a" /* SettingsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__settings_data_service__["a" /* SettingsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__clock_service__["a" /* ClockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__clock_service__["a" /* ClockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_mask__ = __webpack_require__("../../../../ngx-mask/build/ngx-mask.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__time_validator_directive__ = __webpack_require__("../../../../../src/app/time-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__time_validator_directive__["a" /* TimeValidatorDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'app',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_5_ngx_mask__["a" /* NgxMaskModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clock__ = __webpack_require__("../../../../../src/app/clock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClockService = (function () {
    function ClockService(localStorage) {
        this.localStorage = localStorage;
        this.clockRemaining = new __WEBPACK_IMPORTED_MODULE_2__clock__["b" /* ClockRemaining */]();
    }
    ClockService.prototype.getClock = function () {
        this.clock = new __WEBPACK_IMPORTED_MODULE_2__clock__["a" /* Clock */](JSON.parse(localStorage.getItem('clock')));
        return this.clock;
    };
    ClockService.prototype.saveClock = function (clock) {
        this.clock = clock;
        localStorage.setItem('clock', JSON.stringify(this.clock));
        return this.clock;
    };
    ClockService.prototype.calculateClockInOut = function (settings) {
        this.settings = settings;
        this.clock = this.getClock();
        this.clock.clockIn = this.settings.arrivedTime;
        this.clock.normalClockOut = __WEBPACK_IMPORTED_MODULE_3_moment__(this.clock.clockIn).add(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](this.settings.workTime)).valueOf();
        this.clock.minimumClockOut = __WEBPACK_IMPORTED_MODULE_3_moment__(this.clock.normalClockOut).subtract(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](parseInt(this.settings.toleranceTime), 'minutes')).valueOf();
        this.clock.maximumClockOut = __WEBPACK_IMPORTED_MODULE_3_moment__(this.clock.normalClockOut).add(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](parseInt(this.settings.toleranceTime), 'minutes')).valueOf();
        this.clock.maximumExtraTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this.clock.normalClockOut).add(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](2, 'hours')).valueOf();
        return this.saveClock(this.clock);
    };
    ClockService.prototype.calculateRemainingTime = function () {
        var clockOut = __WEBPACK_IMPORTED_MODULE_3_moment__(this.clock.normalClockOut);
        var tolerance = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](parseInt(this.settings.toleranceTime), 'minutes');
        // 'moment().second(59)' para setar hora cheia
        this.clockRemaining.remainingTime = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](clockOut.diff(__WEBPACK_IMPORTED_MODULE_3_moment__().second(59)));
        this.clockRemaining.remainingTimeForMaximumExtraTime = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](this.clockRemaining.remainingTime).add(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](2, 'hours'));
        this.clockRemaining.remainingTimeForMinimum = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](this.clockRemaining.remainingTime).subtract(tolerance);
        this.clockRemaining.remainingTimeForMaximum = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](this.clockRemaining.remainingTime).add(tolerance);
        this.clockRemaining.remainingTimeEnabled = (this.clockRemaining.remainingTimeForMaximumExtraTime.asMinutes() > 0) ? true : false;
    };
    ClockService.prototype.calculateRemainingProgressWidth = function () {
        var totalTime = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](this.settings.workTime).add(__WEBPACK_IMPORTED_MODULE_3_moment__["duration"](2, 'hours'));
        var width = '100%';
        if (this.clockRemaining.remainingTime.asMinutes() > 0) {
            width = Math.ceil((1 - (this.clockRemaining.remainingTime.asMinutes() / totalTime.asMinutes())) * 100) + '%';
        }
        this.clockRemaining.remainingTimeProgressWidth = width;
    };
    ClockService.prototype.getHoursMinutesText = function (timeToCalc) {
        var text = '';
        if (timeToCalc.hours() > 0) {
            text += timeToCalc.hours() + 'h ';
        }
        if (timeToCalc.minutes() > 0) {
            text += timeToCalc.minutes() + 'min para o seu ';
        }
        return text;
    };
    ClockService.prototype.calculateRemainingTimeText = function () {
        var tolerance = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](parseInt(this.settings.toleranceTime), 'minutes');
        var remainingTimeText = '';
        var remainingTimeProgressColor = 'bg-info';
        if (this.clockRemaining.remainingTimeForMaximumExtraTime.valueOf() > 0) {
            if (this.clockRemaining.remainingTimeForMinimum.valueOf() >= 0 && tolerance.valueOf() > 0) {
                remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTimeForMinimum) + 'Horário Mínimo';
            }
            else if (this.clockRemaining.remainingTime.valueOf() >= 0) {
                remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTime) + 'Horário Normal';
                remainingTimeProgressColor = 'bg-success';
            }
            else if (this.clockRemaining.remainingTimeForMaximum.valueOf() >= 0 && tolerance.valueOf() > 0) {
                remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTimeForMaximum) + 'Horário Máximo';
                remainingTimeProgressColor = 'bg-warning';
            }
            else if (this.clockRemaining.remainingTimeForMaximumExtraTime.valueOf() >= 0) {
                remainingTimeText = this.getHoursMinutesText(this.clockRemaining.remainingTimeForMaximumExtraTime) + 'Máximo de Hora Extra';
                remainingTimeProgressColor = 'bg-danger';
            }
        }
        this.clockRemaining.remainingTimeText = remainingTimeText;
        this.clockRemaining.remainingTimeProgressColor = remainingTimeProgressColor;
    };
    ClockService.prototype.getRemainingClockOut = function () {
        this.calculateRemainingTime();
        this.calculateRemainingProgressWidth();
        this.calculateRemainingTimeText();
        return this.clockRemaining;
    };
    return ClockService;
}());
ClockService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object])
], ClockService);

var _a;
//# sourceMappingURL=clock.service.js.map

/***/ }),

/***/ "../../../../../src/app/clock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClockRemaining; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var Clock = (function () {
    function Clock(values) {
        if (values === void 0) { values = {}; }
        this.clockIn = 0;
        this.minimumClockOut = 0;
        this.normalClockOut = 0;
        this.maximumClockOut = 0;
        this.maximumExtraTime = 0;
        Object.assign(this, values);
    }
    Clock.prototype.formatedJson = function () {
        return {
            minimumClockOut: __WEBPACK_IMPORTED_MODULE_0_moment__(this.minimumClockOut).format('HH:mm'),
            normalClockOut: __WEBPACK_IMPORTED_MODULE_0_moment__(this.normalClockOut).format('HH:mm'),
            maximumClockOut: __WEBPACK_IMPORTED_MODULE_0_moment__(this.maximumClockOut).format('HH:mm'),
            maximumExtraTime: __WEBPACK_IMPORTED_MODULE_0_moment__(this.maximumExtraTime).format('HH:mm')
        };
    };
    return Clock;
}());

var ClockRemaining = (function () {
    function ClockRemaining() {
        this.remainingTimeProgressEnabled = false;
        this.remainingTimeProgressColor = '';
        this.remainingTimeEnabled = false;
    }
    ClockRemaining.prototype.formatedJson = function () {
        return {
            notificationTimeBefore: __WEBPACK_IMPORTED_MODULE_0_moment__["duration"](5, 'minutes').asMilliseconds(),
            remainingTime: this.remainingTime.asMilliseconds(),
            remainingTimeForMaximumExtraTime: this.remainingTimeForMaximumExtraTime.asMilliseconds(),
            remainingTimeForMinimum: this.remainingTimeForMinimum.asMilliseconds(),
            remainingTimeForMaximum: this.remainingTimeForMaximum.asMilliseconds()
        };
    };
    return ClockRemaining;
}());

//# sourceMappingURL=clock.js.map

/***/ }),

/***/ "../../../../../src/app/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
    }
    // Limpa notificacoes
    NotificationService.prototype.clearNotifications = function () {
        clearTimeout(this.alarmMin);
        clearTimeout(this.alarmNormal);
        clearTimeout(this.alarmMax);
        clearTimeout(this.alarmMaxExtra);
        clearTimeout(this.alarmResetTime);
    };
    // Registra notificacoes
    NotificationService.prototype.startNotificationTimer = function (clock, clockRemaining, hasToleranceTime) {
        if (hasToleranceTime) {
            var remainingMin = clockRemaining.remainingTimeForMinimum - clockRemaining.notificationTimeBefore;
            if (remainingMin >= 0)
                this.showMin(clock.minimumClockOut, remainingMin);
        }
        var remainingNormal = clockRemaining.remainingTime - clockRemaining.notificationTimeBefore;
        if (remainingNormal >= 0)
            this.showNormal(clock.normalClockOut, remainingNormal);
        if (hasToleranceTime) {
            var remainingMax = clockRemaining.remainingTimeForMaximum - clockRemaining.notificationTimeBefore;
            if (remainingMax >= 0)
                this.showMax(clock.maximumClockOut, remainingMax);
        }
        var remainingMaxExtra = clockRemaining.remainingTimeForMaximumExtraTime - clockRemaining.notificationTimeBefore;
        if (remainingMaxExtra >= 0)
            this.showMaxExtra(clock.maximumExtraTime, remainingMaxExtra);
    };
    // Notificacoes
    NotificationService.prototype.showMin = function (clockOut, remainingTime) {
        var notificationMinOptions = {
            requireInteraction: true,
            vibrate: [200, 100, 200],
            tag: 'overtimeAlertMin',
            icon: 'assets/icon.png',
            title: 'ARRUME SUAS COISAS!',
            body: '5 MINUTOS para o HORÁRIO MÍNIMO\n' + clockOut
        };
        this.alarmMin = setTimeout(function () {
            // let body = {"channel":"@wbindilatti","username":"HORÁRIO MÍNIMO","text":"VAI EMBORA!!!!!","icon_emoji":":alarm_clock:"}
            // this.http.post("https://hooks.slack.com/services/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",
            //   'payload=' + JSON.stringify(body), {headers: new HttpHeaders('Content-Type: application/x-www-form-urlencoded')})
            // .subscribe(
            //   res => {
            //     console.log(res);
            //   },
            //   err => {
            //     console.log("Error occured");
            //   }
            // );
            if (typeof navigator.serviceWorker !== 'undefined') {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    if (reg)
                        reg.showNotification(notificationMinOptions.title, notificationMinOptions);
                });
            }
            var n = new Notification(notificationMinOptions.title, notificationMinOptions);
            setTimeout(n.close.bind(n), 300000);
        }, remainingTime);
    };
    NotificationService.prototype.showNormal = function (clockOut, remainingTime) {
        var notificationNormalOptions = {
            requireInteraction: true,
            vibrate: [200, 100, 200],
            tag: 'overtimeAlertNormal',
            icon: 'assets/icon.png',
            title: 'AINDA ESTÁ AQUI?',
            body: '5 MINUTOS para o HORÁRIO NORMAL\n' + clockOut
        };
        this.alarmNormal = setTimeout(function () {
            if (typeof navigator.serviceWorker !== 'undefined') {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    if (reg)
                        reg.showNotification(notificationNormalOptions.title, notificationNormalOptions);
                });
            }
            var n = new Notification(notificationNormalOptions.title, notificationNormalOptions);
            setTimeout(n.close.bind(n), 300000);
        }, remainingTime);
    };
    NotificationService.prototype.showMax = function (clockOut, remainingTime) {
        var notificationMaxOptions = {
            requireInteraction: true,
            vibrate: [200, 100, 200],
            tag: 'overtimeAlertMax',
            icon: 'assets/icon.png',
            title: 'ÚLTIMO AVISO!',
            body: '5 MINUTOS para o HORÁRIO MÁXIMO\n' + clockOut
        };
        this.alarmMax = setTimeout(function () {
            if (typeof navigator.serviceWorker !== 'undefined') {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    if (reg)
                        reg.showNotification(notificationMaxOptions.title, notificationMaxOptions);
                });
            }
            var n = new Notification(notificationMaxOptions.title, notificationMaxOptions);
            setTimeout(n.close.bind(n), 300000);
        }, remainingTime);
    };
    NotificationService.prototype.showMaxExtra = function (clockOut, remainingTime) {
        var notificationMaxExtraOptions = {
            requireInteraction: true,
            vibrate: [200, 100, 200],
            tag: 'overtimeAlertMaxExtra',
            icon: 'assets/icon.png',
            title: 'AGORA É POR SUA CONTA E RISCO!',
            body: '5 MINUTOS para o MÁXIMO DE EXTRA\n' + clockOut
        };
        this.alarmMaxExtra = setTimeout(function () {
            if (typeof navigator.serviceWorker !== 'undefined') {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    if (reg)
                        reg.showNotification(notificationMaxExtraOptions.title, notificationMaxExtraOptions);
                });
            }
            var n = new Notification(notificationMaxExtraOptions.title, notificationMaxExtraOptions);
            setTimeout(n.close.bind(n), 300000);
        }, remainingTime);
    };
    NotificationService.prototype.showResetTime = function (clockOut, remainingTime) {
        var notificationResetTimeOptions = {
            requireInteraction: true,
            vibrate: [200, 100, 200],
            tag: 'overtimeAlertResetTime',
            icon: 'assets/icon.png',
            title: 'ATENÇÃO!',
            body: 'Horário de entrada apagado\n' + clockOut
        };
        this.alarmResetTime = setTimeout(function () {
            if (typeof navigator.serviceWorker !== 'undefined') {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    if (reg)
                        reg.showNotification(notificationResetTimeOptions.title, notificationResetTimeOptions);
                });
            }
            var n = new Notification(notificationResetTimeOptions.title, notificationResetTimeOptions);
            setTimeout(n.close.bind(n), 300000);
        }, remainingTime);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsDataService = (function () {
    function SettingsDataService(localStorage) {
        this.localStorage = localStorage;
    }
    SettingsDataService.prototype.getSettings = function () {
        this.settings = JSON.parse(localStorage.getItem('settings'));
        if (this.settings == null)
            this.settings = new __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]();
        return this.settings;
    };
    SettingsDataService.prototype.saveSettings = function (settings) {
        this.settings = settings;
        localStorage.setItem('settings', JSON.stringify(this.settings));
        return settings;
    };
    return SettingsDataService;
}());
SettingsDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object])
], SettingsDataService);

var _a;
//# sourceMappingURL=settings-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = (function () {
    function Settings(values) {
        if (values === void 0) { values = {}; }
        this.workTime = '';
        this.toleranceTime = '';
        this.checkSaturdayHoliday = false;
        this.arrivedTime = 0;
        this.lastUpdate = 0;
        Object.assign(this, values);
    }
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "../../../../../src/app/time-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wrongTimeValidator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** A hero's name can't match the given regular expression */
function wrongTimeValidator(inputValue) {
    return function (control) {
        var wrong = !__WEBPACK_IMPORTED_MODULE_2_moment__(control.value, inputValue, true).isValid();
        return wrong ? { 'appTimeValidator': { value: control.value } } : null;
    };
}
var TimeValidatorDirective = TimeValidatorDirective_1 = (function () {
    function TimeValidatorDirective() {
    }
    TimeValidatorDirective.prototype.validate = function (control) {
        return this.appTimeValidator ? wrongTimeValidator(this.appTimeValidator)(control) : null;
    };
    return TimeValidatorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TimeValidatorDirective.prototype, "appTimeValidator", void 0);
TimeValidatorDirective = TimeValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appTimeValidator]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: TimeValidatorDirective_1, multi: true }]
    })
], TimeValidatorDirective);

var TimeValidatorDirective_1;
//# sourceMappingURL=time-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map