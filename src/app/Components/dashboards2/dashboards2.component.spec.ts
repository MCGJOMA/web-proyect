import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboards2Component } from './dashboards2.component';

describe('Dashboards2Component', () => {
  let component: Dashboards2Component;
  let fixture: ComponentFixture<Dashboards2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboards2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
