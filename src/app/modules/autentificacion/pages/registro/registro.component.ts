import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos el servicio de autentificacion
import { AuthService } from '../../service/auth.service';
//importamos co mponente de rutas de angular
import { Router } from '@angular/router';
//servio de firestore
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
// Importamos paquetería de criptación
import * as CryptoJS from 'crypto-js';
// Importamos paquetería de SweetAlert para alertas personalizadas
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //Este hide es para el input de contraseña
  hide = true;
  //IMPORTACION DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''

  }
  //crear una coleccion para los usuarios
  colecctionUsuario: Usuario[] = [];
  //fin de importaciones
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router,
    public servicioFirestore: FirestoreService,
  ) { }
  //funcion para el registro
  async registrar() {
    //constante de credenciales, va a resguardar la informacion que ingrese el usuario
    /*
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password

    }

    this.colecctionUsuario.push(credenciales);

    console.log(credenciales);
    console.log(this.colecctionUsuario)
    */
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      //el metodo THEN es una promesa que devuelve el mismo valor si todo sale bien
      .then(res => {
        Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡Se pudo registrar con éxito! :)",
          icon: "success"
        });
  
        //el metodo NAVIGATE nos redirecciona a otra vista
        this.servicioRutas.navigate(['/inicio'])
      })
      //el metodo CATCH captura una falla y la vuelve error cuando la promesa salga mal
      .catch(error => {
        Swal.fire({
          title: "¡Oh no!",
          text: "Hubo un problema al registrar el nuevo usuario :(",
          icon: "error"
        });
      })

    const uid = await this.servicioAuth.obtenerUid();

    this.usuarios.uid = uid  

    //se envia la nueva informacion como un nuevo objeto a la coleccion de usuarios
    //notificamos al nuevo usuario que se registro con exito

    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    // this.guardarUsuario() guardaba la información del usuario en la colección
    this.guardarUsuario();

    // Llamamos a la función limpiarInputs() para que se ejecute
    this.cleaner();
  }
  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('Error =>', err);
      })
  }
  //funcion para limpiar los inputs
  cleaner() {
    const input = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
