import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItWorkComponent } from './it-work.component';

describe('ItWorkComponent', () => {
  let component: ItWorkComponent;
  let fixture: ComponentFixture<ItWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
