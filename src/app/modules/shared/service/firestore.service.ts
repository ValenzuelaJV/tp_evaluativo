import { Injectable } from '@angular/core';
//cloud firestore - accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos de forma privada la coleccion de usuarios pra que no sea accesible en toda la aplicacion
  //lo definimos como una coleccion de firestore que respete la estructura de nuestra interfaz 'usuario'
  private usuarioCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    //usuarioCollection va a definir la nueva coleccion 'usuarios'que esta en nuestra base de datos
    this.usuarioCollection = this.database.collection<Usuario>('usuarios')
  }
  agregarUsuario(usuario: Usuario, id: string) {
    //generamos nueva promesa y utiliza los metodos:
    //RESOLVE: promesa resuelta -> funciona correctamente
    //REJECT: promesa rechaza -> ocurrio una falla
    return new Promise(async (resolve, reject) => {
     try {
        usuario.uid = id;

        //const resultado = coleccion de usuario, envia como socumento el UID
        //y setea la informacion que ingresamos en el registro

        const resultado = await this.usuarioCollection.doc(id).set(usuario);
        resolve(resultado);
        //bloque CATCH encapsula una falla y la vuelve un error
      }catch(error){
        reject(error);
      }
    })
  }
}
