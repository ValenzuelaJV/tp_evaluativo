import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-camperas',
  templateUrl: './card-camperas.component.html',
  styleUrls: ['./card-camperas.component.css']
})
export class CardCamperasComponent {
    // Colección de sólo productos de categoría "camperas"
  coleccionProductos: Producto [] = []

  coleccionCamperas: Producto [] = []

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor (public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos=producto;
      this.mostrarProductoCamperas();
    })

  }
  mostrarProductoCamperas(){
     // forEach: itera la colección
    this.coleccionProductos.forEach(producto =>{
        // Si la categoría del producto es igual a "ropa", se enviará a la 
      // colección de juguetes específicada
      if(producto.categoria === "camperas"){
        // .push: sube o agrega un item a una colección
        this.coleccionCamperas.push(producto)
      }
    })
  }
  // Muestra información completa de un producto elegido por el usuario
  mostrarVer(info:Producto){
    this.modalVisible=true;
    this.productoSeleccionado=info
  }


}
