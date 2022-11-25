import { Component, OnInit } from '@angular/core';
import { Articulo } from '../interfaces/articulo';
import { ARTICULOS } from '../../datos/mock-articulos';
import { ArticuloService } from '../servicio/articulo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.getArticulos();

  }

  getArticulos(): Articulo[] {
    return this.articuloService.getArticulos();

  }
}
