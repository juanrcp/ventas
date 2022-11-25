import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../servicios/clientes.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../interfaces/clientes';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  detalles: Clientes | undefined;

  profileForm = this.fb.group({
    id: this.getDetalle().id,
    name: [''],
    address: [''],
    phoneNumber: [''],
    mail: ['']    
  });

  constructor(
    private fb: FormBuilder, 
    private clienteServicio: ClientesService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getDetalle();
  }

  getDetalle(): Clientes{
    let id = Number(this.route.snapshot.paramMap.get('id'));
    return this.detalles = this.clienteServicio.getDetalle(id);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    alert("Contacto Modificado.");
  }

  goBack(): void {
    this.location.back();
  }

}
