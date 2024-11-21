import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-topsnoche',
  templateUrl: './card-topsnoche.component.html',
  styleUrls: ['./card-topsnoche.component.css']
})
export class CardTopsnocheComponent {
  coleccionProductos: Producto [] = []

  coleccionTopsnoche: Producto [] = []

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;
  constructor (public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos=producto;
      this.mostrarProductoTopsnoche();
    })

  }
  mostrarProductoTopsnoche(){
    this.coleccionProductos.forEach(producto =>{
      if(producto.categoria === "topsnoche"){
        this.coleccionTopsnoche.push(producto)
      }
    })
  }
  mostrarVer(info:Producto){
    this.modalVisible=true;
    this.productoSeleccionado=info
  }

}
