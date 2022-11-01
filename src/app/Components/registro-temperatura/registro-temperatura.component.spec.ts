import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTemperaturaComponent } from './registro-temperatura.component';

describe('RegistroTemperaturaComponent', () => {
  let component: RegistroTemperaturaComponent;
  let fixture: ComponentFixture<RegistroTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTemperaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
