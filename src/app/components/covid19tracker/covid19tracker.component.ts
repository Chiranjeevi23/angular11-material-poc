import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CovidResponse, StateWise } from 'src/app/models/covid-response.model';
import { Covid19dataService } from 'src/app/services/covid19data.service';

export interface StateWiseData {
  active: string
  confirmed: string
  deaths: string
  deltaconfirmed: string
  deltadeaths: string
  deltarecovered: string
  lastupdatedtime: string
  migratedother: string
  recovered: string
  state: string
  statecode: string
  statenotes: string
}

let STATE_DATA: StateWiseData[] = [];

@Component({
  selector: 'app-covid19tracker',
  templateUrl: './covid19tracker.component.html',
  styleUrls: ['./covid19tracker.component.scss']
})
export class Covid19trackerComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['lastupdatedtime', 'state', 'active', 'confirmed', 'recovered', 'deaths'];
  dataSource = new MatTableDataSource<StateWiseData>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private covidData: Covid19dataService) {
    // Assign the data to the data source for the table to render
    this.getCovidData();
  }

  stateWise: CovidResponse;
  stateDistrictWise: any;

  error: string;

  ngOnInit(): void {

    /* this.getCovidStateAndDistrictWise(); */
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getCovidData() {
    return this.covidData.getCovid19Data().subscribe(data => {
      STATE_DATA = data.statewise;
      this.dataSource.data = STATE_DATA;
      // console.log("STATE_DATA - ", STATE_DATA);
    },
    error => {
      this.error = error;
    });
  }

  getCovidStateAndDistrictWise() {
    return this.covidData.getCovid19DataStateDistrictWise().subscribe(data => {
      /*  this.stateDistrictWise = data;
       console.log(this.stateDistrictWise)

       let stateKeys = Object.keys(this.stateDistrictWise);
       stateKeys.forEach(state => {
       console.log(this.stateDistrictWise[state]);

       }); */
      /*  console.log(data)
       let obj: StateDistrictResponse = JSON.parse(JSON.stringify(data));
       console.log('obj', obj) */

      let stateToDistMap = new Map();
      for (let k of Object.keys(data)) {
        stateToDistMap.set(k, data[k]);
      }
      console.log('stateToDistMap', stateToDistMap);
    });
  }

}
