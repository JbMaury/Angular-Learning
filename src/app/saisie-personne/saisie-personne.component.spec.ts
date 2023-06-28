import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiePersonneComponent } from './saisie-personne.component';

describe('SaisiePersonneComponent', () => {
  let component: SaisiePersonneComponent;
  let fixture: ComponentFixture<SaisiePersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisiePersonneComponent]
    });
    fixture = TestBed.createComponent(SaisiePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
