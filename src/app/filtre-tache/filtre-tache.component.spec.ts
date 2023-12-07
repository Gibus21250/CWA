import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreTacheComponent } from './filtre-tache.component';

describe('FiltreTacheComponent', () => {
  let component: FiltreTacheComponent;
  let fixture: ComponentFixture<FiltreTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltreTacheComponent]
    });
    fixture = TestBed.createComponent(FiltreTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
