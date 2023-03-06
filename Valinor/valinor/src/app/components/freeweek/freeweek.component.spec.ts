import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeweekComponent } from './freeweek.component';

describe('FreeweekComponent', () => {
  let component: FreeweekComponent;
  let fixture: ComponentFixture<FreeweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeweekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
