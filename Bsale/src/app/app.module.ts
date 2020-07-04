import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ProductoService} from './services/producto.service'
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CarroComponent } from './components/carro/carro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavegacionComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
