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
import { ProductosComponent } from './pages/productos/productos.component';
import { CardPantalonesComponent } from './components/card-pantalones/card-pantalones.component';
import { CardCamperasComponent } from './components/card-camperas/card-camperas.component';
import { CardTpsdiaComponent } from './components/card-tpsdia/card-tpsdia.component';
import { CardTopsnocheComponent } from './components/card-topsnoche/card-topsnoche.component';

@NgModule({
  declarations: [
    CamperasComponent,
    PantalonesComponent,
    TopsdiaComponent, 
    TopsnocheComponent,
    CardRopaComponent,
    CardComponent,
    ProductosComponent,
    CardPantalonesComponent,
    CardCamperasComponent,
    CardTpsdiaComponent,
    CardTopsnocheComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatTabsModule
  ],

  exports: [
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
