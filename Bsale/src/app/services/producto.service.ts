import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from './../interfaces/producto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(idMarket: string, idCollection: string): Observable<any>{
    const path= environment.urlProducto+ `/v2/markets/${idMarket}/collection/${idCollection}/market_info.json`
    return this.http.get(path);
  }
}
