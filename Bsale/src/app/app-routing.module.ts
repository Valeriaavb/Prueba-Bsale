import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './components/productos/productos.component';
import {CarroComponent} from './components/carro/carro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component:  ProductosComponent
  },
  {
    path: 'carroDeCompra',
    component:  CarroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
