import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19trackerComponent } from './covid19tracker.component';

describe('Covid19trackerComponent', () => {
  let component: Covid19trackerComponent;
  let fixture: ComponentFixture<Covid19trackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19trackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19trackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
