import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

// VINCULACIONES/ IMPORTACIONES CON FIREBASE
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; // Es para el Cloud Firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Es para la Autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PedidoComponent } from './modules/carrito/components/pedido/pedido.component'; // Es para la BD de archivos e imágenes

/** 
 * npm install firebase --force
 * npm install @angular/fire --save --force
*/

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // COMPONENTES GLOBALES
    SharedModule,
    // Inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // Autentificación
    AngularFireAuthModule,
    // Storage -> BD de imágenes 
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }