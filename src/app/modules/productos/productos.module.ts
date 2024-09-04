import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { TopsdiaComponent } from './pages/topsdia/topsdia.component';
import { TopsnocheComponent } from './pages/topsnoche/topsnoche.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { CamperasComponent } from './pages/camperas/camperas.component';

import { CardComponent } from './pages/card/card.component';
import { CardRopaComponent } from './pages/card.ropa/card.ropa.component';
import { ProductosComponent } from './pages/productos/productos.component';


@NgModule({
  declarations: [
  
    TopsdiaComponent,
    TopsnocheComponent,
    PantalonesComponent,
    CamperasComponent,
    CardComponent,
    CardRopaComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    CamperasComponent,
    PantalonesComponent,
    TopsdiaComponent, 
    TopsnocheComponent,
    CardComponent,
    CardRopaComponent
  ]
})
export class ProductosModule { }
