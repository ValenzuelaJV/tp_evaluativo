import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-tpsdia',
  templateUrl: './card-tpsdia.component.html',
  styleUrls: ['./card-tpsdia.component.css']
})
export class CardTpsdiaComponent {
  coleccionProductos: Producto [] = []

  coleccionTopsdia: Producto [] = []

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;
  constructor (public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos=producto;
      this.mostrarProductoTopsdia();
    })

  }
  mostrarProductoTopsdia(){
    this.coleccionProductos.forEach(producto =>{
      if(producto.categoria === "topsdia"){
        this.coleccionTopsdia.push(producto)
      }
    })
  }
  mostrarVer(info:Producto){
    this.modalVisible=true;
    this.productoSeleccionado=info
  }

}
