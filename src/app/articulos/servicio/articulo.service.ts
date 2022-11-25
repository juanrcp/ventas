import { Injectable } from '@angular/core';
import { ARTICULOS } from 'src/app/datos/mock-articulos';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  listaArticulos: Articulo[] = ARTICULOS;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  getArticulos(): Articulo[] {
    return this.listaArticulos;
  }

  //Poner exclamacion al final para declarar que puede ser indefinido
  getDetalle(id: number): Articulo{
    return this.listaArticulos.find(a => a.id == id)!;
  }

  addArticulo(articulo: Articulo): void{
    this.listaArticulos.push(articulo);
  }

  delArticulo(id: number): boolean {
    //Obtenemos indice
    let indice = this.listaArticulos.findIndex(art => art.id == id);
    //Borramos empezando por el principio los componentes del indice y le decimos que solo borre 1
    this.listaArticulos.slice(indice, 1);
    return true;
  }

  updateArticulo(id: number, articulo: Articulo): void{
    let indice = this.listaArticulos.findIndex(cl => cl.id == id);
    //Con esto buscamos el elemento dentro del indice.
    this.listaArticulos[indice] = articulo;
  }
}
