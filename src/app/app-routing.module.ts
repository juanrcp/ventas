import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulos/articulo-detalle/articulo-detalle.component';
import { ClienteDetalleComponent } from './clientes/cliente-detalle/cliente-detalle.component';

const routes: Routes = [
  
  {path:'', component: ClientesComponent},
  {path:'articulos', component: ArticuloComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'articulo-detalle/:id', component: ArticuloDetalleComponent},
  {path:'cliente-detalle/:id', component: ClienteDetalleComponent},
  {path:'**', redirectTo:'/', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
