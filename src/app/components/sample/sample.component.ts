import { Component, OnInit } from '@angular/core';
import { DrawerHandlerService } from 'src/app/services/drawer-handler.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  actionOptions = [
    { name: 'sampleDrawerFormComponent', desc: 'Open Sample Drawer' }
  ]

  constructor(private drawerHandler: DrawerHandlerService) { }

  ngOnInit(): void {
  }

  changeOfCanvasDrawer(option: any) {
    this.drawerHandler.getForm(option);
  }

}
