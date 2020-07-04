import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any = [];
  listCarro: any = [];
  //cantidad: number = 0;
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProducto();

  }


  getProducto() {
    this.productoService.getProductos('1', '2').subscribe(
      resp => {
        this.productos = resp;
      },
      err => console.error(err)
    );
  }


  agregarAlCarro(producto: any){
    let carro: any = {
      quantity: 0,
      unitValue: 0,
      idVarianteProducto: 0,
      img: "",
      nombre: ""
    };

    carro.quantity = producto.cantidad;
    carro.unitValue = producto.variant.finalPrice;
    carro.idVarianteProducto = producto.variant.id;
    carro.img = producto.urlImg;
    carro.nombre = producto.name;
    this.listCarro.push(carro);
   /* this.productoService.postCarro(carro).subscribe(
      resp => {
      },
      err => console.error(err)
    );*/
    console.log(this.listCarro)
    localStorage.setItem('carro', this.listCarro);
  }



}
