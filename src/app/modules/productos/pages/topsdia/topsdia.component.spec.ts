import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsdiaComponent } from './topsdia.component';

describe('TopsdiaComponent', () => {
  let component: TopsdiaComponent;
  let fixture: ComponentFixture<TopsdiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopsdiaComponent]
    });
    fixture = TestBed.createComponent(TopsdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
