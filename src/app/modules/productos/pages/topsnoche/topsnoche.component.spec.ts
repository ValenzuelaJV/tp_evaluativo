import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsnocheComponent } from './topsnoche.component';

describe('TopsnocheComponent', () => {
  let component: TopsnocheComponent;
  let fixture: ComponentFixture<TopsnocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopsnocheComponent]
    });
    fixture = TestBed.createComponent(TopsnocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
