import { Injectable } from '@angular/core';
import { AppData } from './models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public async fetchAppData() {
    try {
      const response = await fetch("http://localhost:5001/api/appdata");
      const json = await response.json();
      return json as AppData;
    }
    catch (e) {
      console.log(e);
      return null;
    }
  }
}
