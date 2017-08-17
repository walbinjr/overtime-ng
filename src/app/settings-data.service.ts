import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { Settings } from './settings';

@Injectable()
export class SettingsDataService {
  settings: Settings;

  constructor(private localStorage: LocalStorageService) {
  }

  getSettings(): Settings {
    this.settings = JSON.parse(localStorage.getItem('settings'));

    if( this.settings == null )
      this.settings = new Settings();

    return this.settings;
  }

  saveSettings(settings: Settings): Settings {
    this.settings = settings;
    localStorage.setItem('settings', JSON.stringify(this.settings));
    return settings;
  }
}
