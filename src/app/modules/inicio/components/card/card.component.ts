import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 public info: Producto[];
  constructor(){
    this.info = [
      {
        idProducto: "",
        nombre: "pantalon wide",
        precio: 5,
        descripcion: "pantalon wide gastado",
        categoria: "pantalones",
        imagen: "https://i1.sndcdn.com/artworks-000190784980-i4qoly-t500x500.jpg",
        alt: "Un pantalon wide"
      },
      {
        idProducto: "",
        nombre: "Campera de jean",
        descripcion: "campera negra de jean",
        categoria: "camperas",
        precio: 5,
        imagen: "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg",
        alt: "Una campera de jean"
      },
      {
        idProducto: "",
        nombre: "top flores",
        descripcion: "top blanco de flor",
        categoria: "",
        precio: 5,
        imagen: "https://eraverde.com.ar/wp-content/uploads/2018/08/carpincho_roger.jpg",
        alt: "Un top de flores"
      }
    ]
  }
}
 
