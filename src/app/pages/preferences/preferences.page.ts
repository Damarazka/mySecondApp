import { Component } from '@angular/core';
import { PreferencesService } from 'src/app/services/preferences.service'; 

@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.page.html',
  styleUrls: ['preferences.page.scss'],
})
export class PreferencesPage {

  constructor(private preferencesService: PreferencesService) {}

  async savePreference() {
    await this.preferencesService.setPreference('username', 'john_doe');
  }

  async loadPreference() {
    const username = await this.preferencesService.getPreference('username');
    console.log('Username:', username);
  }

  async deletePreference() {
    await this.preferencesService.deletePreference('username');
  }

  async clearAllPreferences() {
    await this.preferencesService.clearPreferences();
  }
}
