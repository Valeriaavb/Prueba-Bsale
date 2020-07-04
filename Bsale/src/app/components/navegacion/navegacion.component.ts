import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

buscar: string = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

  buscarProducto(){
    this.productoService.getProductos('1','2',this.buscar).subscribe(
      res => {

      },
      err=> console.log(err)
    );
  }
}
