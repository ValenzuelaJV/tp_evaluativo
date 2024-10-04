import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/iniciosesion/iniciosesion.component';
// IMPORTACIÓN A LAS VISTAS DEL MÓDULO AUTENTIFICACIÓN

const routes: Routes = [
  {
    path:"registro",component: RegistroComponent
  },
  {
    path:"inicio-sesion",component: InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
