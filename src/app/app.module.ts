import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
//vinvulaciones importaciones con FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { TopsdiaComponent } from './modules/productos/pages/topsdia/topsdia.component';
import { TopsnocheComponent } from './modules/productos/pages/topsnoche/topsnoche.component';
import { PantalonesComponent } from './modules/productos/pages/pantalones/pantalones.component';
import { CamperasComponent } from './modules/productos/pages/camperas/camperas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TopsdiaComponent,
    TopsnocheComponent,
    PantalonesComponent,
    CamperasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

