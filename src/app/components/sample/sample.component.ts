import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerHandlerService } from 'src/app/services/drawer-handler.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  actionOptions = [
    { name: 'sampleDrawerFormComponent', desc: 'Open Sample Drawer' },
    // { name: 'covidTracker', desc: 'Open Covid Tracker' }
  ]

  constructor(private drawerHandler: DrawerHandlerService, private router: Router) { }

  ngOnInit(): void {
  }

  changeOfCanvasDrawer(option: any) {
    this.drawerHandler.getForm(option);
  }

  goToCovidTracker(){
    this.router.navigate(['/covid']);
  }

}
