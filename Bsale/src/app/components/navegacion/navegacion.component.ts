import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { ProductoService } from "./../../services/producto.service";

@Component({
  selector: "app-navegacion",
  templateUrl: "./navegacion.component.html",
  styleUrls: ["./navegacion.component.css"],
})
export class NavegacionComponent implements OnInit {
  idMarket = "1";
  idColeccion = "2";
  buscar: string = "";
  search: string = "";
  @Output() emisor = new EventEmitter();
  @Input() barra:boolean;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {}

  buscarProducto() {
    this.emisor.emit(this.buscar);
  }
  borrarSearch(idea?) {
    this.buscar = "";
    !idea? this.emisor.emit(this.buscar):"";
  }

}
