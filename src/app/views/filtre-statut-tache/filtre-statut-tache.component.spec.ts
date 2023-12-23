import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreStatutTacheComponent } from './filtre-statut-tache.component';

describe('FiltreStatutTacheComponent', () => {
  let component: FiltreStatutTacheComponent;
  let fixture: ComponentFixture<FiltreStatutTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltreStatutTacheComponent]
    });
    fixture = TestBed.createComponent(FiltreStatutTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
