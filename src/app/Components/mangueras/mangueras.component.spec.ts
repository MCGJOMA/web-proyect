import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManguerasComponent } from './mangueras.component';

describe('ManguerasComponent', () => {
  let component: ManguerasComponent;
  let fixture: ComponentFixture<ManguerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManguerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManguerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
