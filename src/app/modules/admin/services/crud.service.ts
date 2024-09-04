import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos colecccion para los rpoductos de la web del tipo producto
 private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) { 
    //referenciamos coleccion productos y sera subida como "productos" a firebase
    this.productosCollection = database.collection('producto');
  }
  //crear productos
  crearProducto(producto: Producto){
    return new Promise(async (resolve, reject) => {
      try{
        //creamos numero identificativo para el rpoducto en la base de datos
        const idProducto = this.database.createId();

        //asignamos ID creado al atributo idProducto de la iterfaz "Producto"
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      }catch(error){
        reject(error);
      }
    })
 
  }

  //obtener productos
  obtenerProducto(){
    //snapshotChanges toma captura del estdo de los datos
    //pipe funciona como una tuberia que retorna el nuevo arreglo  de datos
    //map "mapea" o corre esa nueva informacion
    //a resguarda la nueva informacion y la envia
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  //editar productos
 modificarProducto(idProducto: string, nuevaData: Producto){
   //accedemos a la coleccion, buscamos po ID y actualizamos informacion
   return this.database.collection('producto').doc(idProducto).update(nuevaData);
 }

  //eliminar productos
  eliminarProducto(idProducto: string){
    return new Promise((resolve,reject) => {
      try{
        const respuesta = this.productosCollection.doc(idProducto).delete();
        resolve(respuesta);
      }
      catch(error){
        reject(error);
      }
    })
  }
}
