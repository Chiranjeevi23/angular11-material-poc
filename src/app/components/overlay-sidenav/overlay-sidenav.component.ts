import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-sidenav',
  templateUrl: './overlay-sidenav.component.html',
  styleUrls: ['./overlay-sidenav.component.scss']
})
export class OverlaySidenavComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
