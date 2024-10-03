import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CamperasComponent } from './pages/camperas/camperas.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { TopsdiaComponent } from './pages/topsdia/topsdia.component';
import { TopsnocheComponent } from './pages/topsnoche/topsnoche.component';
import { ProductosComponent } from './pages/productos/productos.component';
const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"camperas",component:CamperasComponent
  },
  {
    path:"topsdia",component:TopsdiaComponent
  },
  {
    path:"topsnoche",component:TopsnocheComponent
  },
  {
    path:"pantalones",component:PantalonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
