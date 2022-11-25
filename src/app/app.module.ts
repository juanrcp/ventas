import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { ClienteDetalleComponent } from './clientes/cliente-detalle/cliente-detalle.component';
import { ArticuloDetalleComponent } from './articulos/articulo-detalle/articulo-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientesComponent,
    ArticuloComponent,
    ClienteDetalleComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
