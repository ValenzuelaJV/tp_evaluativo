import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { ProductosRoutingModule } from './productos-routing.module';

import { TopsdiaComponent } from './pages/topsdia/topsdia.component';
import { TopsnocheComponent } from './pages/topsnoche/topsnoche.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { CamperasComponent } from './pages/camperas/camperas.component';

import { CardComponent } from './components/card/card.component';
import { CardRopaComponent } from './components/card-ropa/card-ropa.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductosComponent } from './pages/productos/productos.component';

@NgModule({
  declarations: [
    CamperasComponent,
    PantalonesComponent,
    TopsdiaComponent, 
    TopsnocheComponent,
    CardRopaComponent,
    CardComponent,
    CarruselComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatTabsModule
  ],

  exports: [
   CarruselComponent,
    CamperasComponent,
    PantalonesComponent,
    TopsdiaComponent, 
    TopsnocheComponent,
    CardComponent,
    CardRopaComponent,
    MatTabsModule,
    ProductosComponent
  ]
})
export class ProductosModule { }
