import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QosdataService {
  currentService: string;
  currentApp: string;
  currentDuration: string;

  constructor(private  httpClient:  HttpClient) { }

  getAppsFromService() {
    // gets the apps from the service
    return this.httpClient.get('./assets/eae-configData.json');
  }
}
