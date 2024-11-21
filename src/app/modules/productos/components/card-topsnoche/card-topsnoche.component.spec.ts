import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopsnocheComponent } from './card-topsnoche.component';

describe('CardTopsnocheComponent', () => {
  let component: CardTopsnocheComponent;
  let fixture: ComponentFixture<CardTopsnocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTopsnocheComponent]
    });
    fixture = TestBed.createComponent(CardTopsnocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
