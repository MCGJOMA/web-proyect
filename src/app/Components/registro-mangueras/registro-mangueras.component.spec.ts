import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroManguerasComponent } from './registro-mangueras.component';

describe('RegistroManguerasComponent', () => {
  let component: RegistroManguerasComponent;
  let fixture: ComponentFixture<RegistroManguerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroManguerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroManguerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
