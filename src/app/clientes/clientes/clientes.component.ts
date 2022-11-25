import { Component, OnInit } from '@angular/core';
import { Clientes } from '../interfaces/clientes';
import { CLIENTES } from '../../datos/clientes-mock';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): Clientes[] {
    return this.clientesService.getClientes();
  }

}
