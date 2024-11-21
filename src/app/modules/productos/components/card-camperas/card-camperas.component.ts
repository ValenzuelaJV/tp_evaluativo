import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-camperas',
  templateUrl: './card-camperas.component.html',
  styleUrls: ['./card-camperas.component.css']
})
export class CardCamperasComponent {
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
    this.coleccionProductos.forEach(producto =>{
      if(producto.categoria === "camperas"){
        this.coleccionCamperas.push(producto)
      }
    })
  }
  mostrarVer(info:Producto){
    this.modalVisible=true;
    this.productoSeleccionado=info
  }







}
