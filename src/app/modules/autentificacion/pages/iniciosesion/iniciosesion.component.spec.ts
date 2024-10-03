import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionComponent } from './iniciosesion.component';


describe('IniciosesionComponent', () => {
  let component: InicioSesionComponent;
  let fixture: ComponentFixture<InicioSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionComponent]
    });
    fixture = TestBed.createComponent(InicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
