import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTacheComponent } from './creation-tache.component';

describe('CreationTacheComponent', () => {
  let component: CreationTacheComponent;
  let fixture: ComponentFixture<CreationTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationTacheComponent]
    });
    fixture = TestBed.createComponent(CreationTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
