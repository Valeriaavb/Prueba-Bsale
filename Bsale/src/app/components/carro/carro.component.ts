import { Component, OnInit,OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carros: any = [];
  total: number = 0;
  carroEnviar: any= {};
  
  constructor(private productoService: ProductoService,private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.carros = JSON.parse(localStorage.getItem("carro"));
    this.carros.forEach(element => {
      this.total = element.quantity * element.unitValue + this.total;
    });

  }

 
  borrarCarro(element: any) {
    localStorage.removeItem("carro");
    var i = this.carros.indexOf(element);
    this.carros.splice(i, 1);
    this.total= 0;
    this.carros.forEach(element => {
      this.total = element.quantity * element.unitValue + this.total;
    });
    localStorage.setItem("carro", JSON.stringify(this.carros));
  }

  enviarCarro() {
    this.carroEnviar.cartDetails= this.carros; 
    this.productoService.postCarro(this.carroEnviar).subscribe(
      resp => {
        this.router.navigate(['/productos']);
        localStorage.removeItem("carro");
      },
      err => console.error(err)
    );
     
  }

}
