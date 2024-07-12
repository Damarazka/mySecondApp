import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private storage: Storage) {
    this.init(); // panggil fungsi inisialisasi storage
  }

  async init() {
    await this.storage.create();
  }

  // Contoh CRUD operations
  async setPreference(key: string, value: any): Promise<void> {
    await this.storage.set(key, value);
  }

  async getPreference(key: string): Promise<any> {
    return await this.storage.get(key);
  }

  async deletePreference(key: string): Promise<void> {
    await this.storage.remove(key);
  }

  async clearPreferences(): Promise<void> {
    await this.storage.clear();
  }
}
