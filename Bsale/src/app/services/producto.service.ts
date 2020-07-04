import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }


  getProductos(idMarket: string, idCollection: string): Observable<any> {
    const path = environment.urlProducto +`/v2/markets/${idMarket}/collection/${idCollection}/market_info.json`;
    return this.http.get(path).pipe(map((res: any) => {
          res.data.forEach((element) => {
            element.cantidad = 0;
          });
          return res.data;
        })
      ).pipe(catchError((error: Response) => throwError(error || "Server error"))
      );
  }

  postCarro(body){
    const path = environment.urlMarket +`/v1/cart.json`;
    return this.http.post(path,body);
  }
}
