import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ListChampionService } from 'src/app/services/list-champion.service';

import { ChampionsComponent } from './champions.component';




describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search champion', () =>{
    const fixture = TestBed.createComponent(AppComponent)
    component.searchText = new FormControl ('ahri')
    component.listChampions(1 , 8 , 'ahri')
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.nameChampion')?.textContent).toContain('ahri')
  })
});
