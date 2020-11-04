import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Dexie from 'dexie';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class PuntoGeograficoService {
  
  readonly API_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}';
  private db: any;
  private table: Dexie.Table<any> = null;
  private tableListPunto: Dexie.Table<any> = null;
  
  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService
  ) {
    this.initIndexedDB();
  }
  
  private initIndexedDB() {
    this.db = new Dexie('db-punto');
    this.db.version(1).stores({
      punto: 'id, latitud, longitud, nombre',
      puntoList: 'id, nombre'
    });
    
    this.onlineOfflineService.connectionChanged.subscribe(online => {
      if (online) {
        console.log('borra');
        this.clearRows();
        
      }
    });
    
    this.tableListPunto = this.db.table('puntoList');
    this.table = this.db.table('punto');
  }
  
  getPuntos() {
    return this.http.get(this.API_WEATHER);
  }
  
  getPuntoById(apiId) {
    return this.http.get(apiId);
  }
  
  async setPuntoListIndexedDB(url) {
    try {
      console.log(url);
      await this.tableListPunto.add(url);
    } catch (error) {
      console.log('error');
    }
  }
  
  async setPuntoIndexedDB(punto) {
    try {
      await this.table.add(punto);
    } catch (error) {
      console.log('error');
    }
  }
  
  async sendIndexedPunto() {
    const puntos = await this.table.toArray();
    console.log(puntos);
  }
  
  clearRows() {
    this.db.punto.clear();
    this.db.puntoList.clear();
  }
  
  async getPuntoIndexedDB(id) {
    return await this.db.punto.get(id);
  }
  
  async getPuntoList() {
    return await this.tableListPunto.toArray();
  }
  
}
