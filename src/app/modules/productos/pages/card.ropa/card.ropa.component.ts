import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card.ropa',
  templateUrl: './card.ropa.component.html',
  styleUrls: ['./card.ropa.component.css']
})
export class CardRopaComponent {
 // Colección de todos los productos
 coleccionProductos: Producto[] = [];

 // Colección de sólo productos de categoría "Juguetes"
 coleccionRopa: Producto[] = [];

 productoSeleccionado!: Producto;

 modalVisible: boolean = false;

 constructor(public servicioCrud: CrudService){}

 ngOnInit(): void{
   this.servicioCrud.obtenerProducto().subscribe(producto => {
     this.coleccionProductos = producto;
   })
   // mostrar la colección actual de juguetes
 }

 // Función para filtrar los productos que sean del tipo "juguetes"
 mostrarProductoJuguetes(){
   // forEach: itera la colección
   this.coleccionProductos.forEach(producto => {
     // Si la categoría del producto es igual a "juguetes", se enviará a la 
     // colección de juguetes específicada

     if(producto.categoria === "ropa"){
       // .push: sube o agrega un item a una colección
       this.coleccionRopa.push(producto);
     }
   })
 }

 // Muestra información completa de un producto elegido por el usuario
 mostrarVer(info: Producto){
   this.modalVisible = true;

   this.productoSeleccionado = info;
 }
}
