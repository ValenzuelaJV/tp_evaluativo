import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  colecctionUsuario: Usuario[] = [];
 //funcion para inicio de sesions
  iniciosesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password

    }
    for (let i = 0; i < this.colecctionUsuario.length; i++) {
      const usuario = this.colecctionUsuario[i];
      if (usuario.email === credenciales.email &&
        usuario.password === credenciales.password )
      {
        alert("iniciaste sesipon correctamente");
        break;
      } else {
        alert("nose pudo iniciar sesion");
        break;
      }
    }
    //enviamos los nuevos registros por medio del metodo push a la coleccion
    console.log(credenciales)

  }
}
