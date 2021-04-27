import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDrawerFormComponent } from './sample-drawer-form.component';

describe('SampleDrawerFormComponent', () => {
  let component: SampleDrawerFormComponent;
  let fixture: ComponentFixture<SampleDrawerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDrawerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDrawerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
