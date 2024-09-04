import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  product: string = '';

  productosCarrusel: Producto[] = [];

  productoAnadido(producto: Producto) {
    this.product = `${producto.nombre} : $${producto.precio}`;

    try {
      /*agregamos la informacion por el parametro de la funcion
      a la coleccion dse carrusel*/
      this.productosCarrusel.push(producto);
      Swal.fire({
        title: 'bien',
        text: 'producto',
        icon: 'info',
      });
    } catch (error) {
      Swal.fire({
        title: '!Oh no¡',
        text: 'Ha ocurrido un error\n' + error,
      });
    }
  }
}
