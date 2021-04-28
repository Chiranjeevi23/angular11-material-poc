import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidResponse } from '../models/covid-response.model';

@Injectable({
  providedIn: 'root'
})
export class Covid19dataService {

  constructor(private http: HttpClient) { }

  getCovid19Data(): Observable<CovidResponse>{
    return this.http.get<CovidResponse>('https://api.covid19india.org/data.json');
  }

  getCovid19DataStateDistrictWise(): Observable<any>{
    return this.http.get<any>('https://api.covid19india.org/state_district_wise.json');
  }


}
