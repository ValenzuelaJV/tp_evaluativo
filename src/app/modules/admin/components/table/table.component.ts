import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //crear coleccion de productos del tipo producto -> lo definimos como un array
 coleccionProductos: Producto[] = [];
// Variable para manejar el estado de Edición y Eliminación de productos
 modalVisibleProducto: boolean= false;
 // Variable va a tomar el producto que nosotros elijamos
 productoSeleccionado!: Producto;

 //definimos dormulario para los productos
 /*
 atributos alfanumericos (string) se inicializan con comillas simples
 atributos numericos
 */ 
 

 producto = new FormGroup({
   nombre: new FormControl('', Validators.required),
   precio: new FormControl(0, Validators.required),
   descripcion: new FormControl('', Validators.required),
   categoria: new FormControl('', Validators.required),
   imagen:new FormControl('', Validators.required),
   alt: new FormControl('', Validators.required), 
 })

 constructor(public servicioCrud: CrudService){}

 ngOnInit(): void{
 //suscribe notifica constantemente los cambios actuales del sistema
  this.servicioCrud.obtenerProducto().subscribe(producto =>{
    //guarda la informacon recibida como un nuevo producto a la coleccion
    this.coleccionProductos=producto;
  })
 }

 async agregarProducto(){
  //validamos los valores agregados del producto agregado
  if(this.producto.valid){
    let nuevoProducto: Producto= {
      idProducto: '',
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!
    }

    await this.servicioCrud.crearProducto(nuevoProducto)
    .then(producto => {
    alert("ah agregado un nuevo producto con exito :)");
    })
    .catch(error =>{
      alert("hubo un problema al agregar un nuevo producto :(");
    })
  }
 }

 //funcion para alertar al usuario del producto que desea eliminar
 mostrarBorrar(productoSeleccionado: Producto){
   this.modalVisibleProducto=true;//abre el modal
   this.productoSeleccionado=productoSeleccionado;//toma los valores del rpoducto elegido
  }

  //funcion para eliminar definitivamente el producto
  borrarProducto(){
   this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
   .then(respuesta =>{
     alert("el producto se ha eliminado correctamente")
   })
   .catch(error => {
     alert("no se ha podido eliminar el producto /n+error");
   })
  }
  
  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado= productoSeleccionado
    //enviar o setear los nuevos valores y resignarlos a las variables
    //el id no se vuelve a enviar ni se modifica por ende no lo llamamos
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion:productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  editarProducto(){
    let datos: Producto = {
      idProducto:this.productoSeleccionado.idProducto,
      nombre: this.productoSeleccionado.nombre!,
      precio: this.productoSeleccionado.precio!,
      descripcion: this.productoSeleccionado.descripcion!,
      categoria: this.productoSeleccionado.categoria!,
      imagen: this.productoSeleccionado.imagen!,
      alt: this.productoSeleccionado.alt!
    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto=> {
      alert("el producto fue seleccionado con exito");
    })
    .catch(error =>{
      alert("hubo n problema al modificar el producto")
    })

    await this.servicioCrud.crearProducto(datos)
    .then(producto => {
      alert("Ha agregado un nuevo producto con éxito :)");

      // Limpiamos formulario para agregar nuevos productos
      this.producto.reset();
    })
    .catch(error => {
      alert("Hubo un problema al agregar un nuevo producto :(");

      this.producto.reset();
    })
  }
}



