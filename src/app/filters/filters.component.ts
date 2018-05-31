import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { QosdataService } from '../qosdata.service';
import { mixinDisabled } from '@angular/material/core/typings/common-behaviors/disabled';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  isServiceAvailable = false;
  areAppsAvailable = false;
  readyToFetch = false;
  isCustomDurationSelected = false;

  msegServices = [
    {value: 'eae', viewValue: 'EAE'},
    {value: 'cmc', viewValue: 'CMC'},
    {value: 'did', viewValue: 'DID'}
  ];

  duration = [
    {value: 'monthly', viewValue: 'Monthly'},
    {value: 'weekly', viewValue: 'Weekly'},
    {value: 'custom', viewValue: 'Custom'},
  ];

  maxDate = new Date();
  currentDate = new Date();
  minDate: Date;

  msegAppsPerService = [];

  constructor(private qosDataService: QosdataService) { }

  ngOnInit() {
    // mindate is 6 months from current Date
    this.currentDate.setMonth(this.currentDate.getMonth() - 6);
    this.minDate = this.currentDate;
  }

  onServiceChange(change: MatSelectChange) {
    if (change.value) {
      this.isServiceAvailable = true;
      this.qosDataService.currentService = change.value;
      this.qosDataService.getAppsFromService().subscribe((appConfig: any) => {
        appConfig.forEach(config => {
          this.msegAppsPerService.push({value: config.app.toLowerCase(), viewValue: config.app});
        });
      });
    }
  }

  onAppChange(change: MatSelectChange) {
    if (change.value) {
      this.areAppsAvailable = true;
      this.qosDataService.currentApp = change.value;
    }
  }

  onDurationChange(change: MatSelectChange) {
    if (change.value) {
      this.readyToFetch = true;
      this.qosDataService.currentDuration = change.value;
      if (change.value == 'custom') {
        this.isCustomDurationSelected = true;
      } else {
        this.isCustomDurationSelected = false;
      }
    }
  }
}
