import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHumedadComponent } from './registro-humedad.component';

describe('RegistroHumedadComponent', () => {
  let component: RegistroHumedadComponent;
  let fixture: ComponentFixture<RegistroHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHumedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
