import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProducto();

  }


  getProducto() {
    this.productoService.getProductos('1', '2').subscribe(
      resp => {
        this.productos = resp.data;
        console.log(resp.data[0].pictures.href);
        console.log(this.productos);
      });
  }


}
