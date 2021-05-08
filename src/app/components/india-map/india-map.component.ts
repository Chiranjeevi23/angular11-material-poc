import { Component, Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.scss']
})
export class IndiaMapComponent implements OnInit {

  @ViewChild('tooltip') tooltip: ElementRef;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  public mouseEnter($event: any, data: any): void {
    let circle = $event.target as HTMLElement;
    let coordinates = circle.getBoundingClientRect();
    let x = `${coordinates.left + 20}px`;
    let y = `${coordinates.top + 20}px`;
    this.renderer.setStyle(this.tooltip.nativeElement, 'left', x);
    this.renderer.setStyle(this.tooltip.nativeElement, 'top', y);
    this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'block');
    this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', data);
  }

  public mouseLeave($event: any): void {
    this.renderer.setProperty(this.tooltip.nativeElement, 'innerHTML', '');
    this.renderer.setStyle(this.tooltip.nativeElement, 'display', 'none');
  }

}
