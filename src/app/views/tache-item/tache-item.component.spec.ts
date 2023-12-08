import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheItemComponent } from './tache-item.component';

describe('TacheItemComponent', () => {
  let component: TacheItemComponent;
  let fixture: ComponentFixture<TacheItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacheItemComponent]
    });
    fixture = TestBed.createComponent(TacheItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
