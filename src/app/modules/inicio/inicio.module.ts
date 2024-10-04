import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    InicioComponent,
    CardComponent,
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }