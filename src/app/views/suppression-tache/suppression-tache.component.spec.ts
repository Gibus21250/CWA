import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionTacheComponent } from './suppression-tache.component';

describe('SuppressionTacheComponent', () => {
  let component: SuppressionTacheComponent;
  let fixture: ComponentFixture<SuppressionTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppressionTacheComponent]
    });
    fixture = TestBed.createComponent(SuppressionTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
