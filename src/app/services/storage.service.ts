import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | undefined;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    try {
      const storage = await this.storage.create();
      this._storage = storage;
      console.log('Storage driver:', this.storage.driver); // Tambahkan log untuk driver yang digunakan
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  public async set(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  public async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  public async keys(): Promise<string[]> {
    return await this._storage?.keys() || [];
  }
}
