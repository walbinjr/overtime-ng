import { Component } from '@angular/core';

import { Settings } from './settings';
import { SettingsDataService } from './settings-data.service';

import * as moment from 'moment';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SettingsDataService]
})
export class AppComponent {
  showSettings = false;
  settings: Settings = new Settings();
  arrivedTime: string = '';

  constructor(private settingsDataService: SettingsDataService) {
    this.settings = this.settingsDataService.getSettings();
    if(this.settings.arrivedTime) {
      this.arrivedTime = moment(this.settings.arrivedTime).format('HH:mm');
    }
  }

  toggleSettings(event) {
    this.showSettings = !this.showSettings;
    if(!this.showSettings) {
      this.saveSettings();
    }
  }

  saveArrivedTime() {
    this.settings.arrivedTime = moment(this.arrivedTime,'HH:mm').valueOf();
    this.saveSettings();
  }

  resetSettings() {
    this.settings = new Settings();
    this.saveSettings();
  }

  saveSettings() {
    this.settings.lastUpdate = moment().valueOf();
    this.settingsDataService.saveSettings(this.settings);
  }
}
