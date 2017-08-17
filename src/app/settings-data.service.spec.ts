import { TestBed, inject } from '@angular/core/testing';

import { SettingsDataService } from './settings-data.service';

describe('SettingsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsDataService]
    });
  });

  it('should be created', inject([SettingsDataService], (service: SettingsDataService) => {
    expect(service).toBeTruthy();
  }));
});
