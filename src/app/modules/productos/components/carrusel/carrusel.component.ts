import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
 //String que modificara el valor de @Input en el componente hijo
 product: string = '';

 //Coleccion de productos añadidos a la lista
 productosCarrusel: Producto[] = [];

}
