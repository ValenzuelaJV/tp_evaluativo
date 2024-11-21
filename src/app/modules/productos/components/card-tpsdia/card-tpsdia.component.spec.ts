import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTpsdiaComponent } from './card-tpsdia.component';

describe('CardTpsdiaComponent', () => {
  let component: CardTpsdiaComponent;
  let fixture: ComponentFixture<CardTpsdiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTpsdiaComponent]
    });
    fixture = TestBed.createComponent(CardTpsdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
