import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from '../servicio/articulo.service';
import { Location } from '@angular/common';
import { Articulo } from '../interfaces/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  detallesArticulo: Articulo | undefined;

  profileForm = this.fb.group({
    id: this.getDetalle().id,
    name: [''],
    family: [''],
    price: [''],
    stock: ['']    
  });

/*
  profileForm = new FormGroup({
    id: new FormControl(this.getDetalle().id),
    name: new FormControl('', Validators.required),
    family: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl('')    
  });
*/

  constructor(
    private fb: FormBuilder, 
    private articuloService: ArticuloService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getDetalle();
  }

  getDetalle(): Articulo{
    let id = Number(this.route.snapshot.paramMap.get('id'));
    return this.detallesArticulo = this.articuloService.getDetalle(id);
  }

  onSubmit(): void  {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    //El perfileForm no lo reconocer porque el valor number no puede ser undifined    
    //this.articuloService.updateArticulo(id, this.profileForm.value);
    console.warn(this.profileForm.value);
    alert("Articulo Modificado.");

  }

  goBack(): void {
    this.location.back();
  }

}
