import { Component, OnInit, Input, Output, OnChanges, OnDestroy } from "@angular/core";
import { ProductoService } from "./../../services/producto.service";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"],
})
export class ProductosComponent implements OnInit{
  productos: any = [];
  idMarket = "1";
  idColeccion = "2";
  public listCarro: any = [];
  // @Input() search;

  imagenNoEncontrada: string =
    "https://www.cuestalibros.com/content/images/thumbs/default-image_550.png";
  constructor(private productoService: ProductoService) {}
  emisor(algo) {
    this.getProducto(algo);
  
  }
  ngOnInit() {
    this.getProducto();
  }

  getProducto(search?) {
    if (search) {
      this.productoService
        .getProductos(this.idMarket, this.idColeccion, search)
        .subscribe(
          (resp) => {
            this.productos = resp;
          },
          (err) => console.error(err)
        );
    } else {
      this.productoService
        .getProductos(this.idMarket, this.idColeccion)
        .subscribe(
          (resp) => {
            this.productos = resp;
          },
          (err) => console.error(err)
        );
    }
  }

  agregarAlCarro(producto: any) {
    //const OBJETO_2 = JSON.parse(localStorage.getItem("carro"));
    localStorage.removeItem("carro");
    let carro: any = {
      quantity: 0,
      unitValue: 0,
      idVarianteProducto: 0,
      img: "",
      nombre: "",
    };
    carro.quantity = producto.cantidad;
    carro.unitValue = producto.variant.finalPrice;
    carro.idVarianteProducto = producto.variant.id;
    carro.img = producto.urlImg;
    carro.nombre = producto.name;
    this.listCarro.push(carro);
    localStorage.setItem("carro", JSON.stringify(this.listCarro));
  }
}
