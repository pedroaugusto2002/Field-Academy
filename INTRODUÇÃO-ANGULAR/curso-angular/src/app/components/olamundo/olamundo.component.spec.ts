import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlamundoComponent } from './olamundo.component';

describe('OlamundoComponent', () => {
  let component: OlamundoComponent;
  let fixture: ComponentFixture<OlamundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlamundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlamundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
