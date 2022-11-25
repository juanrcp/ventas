import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';
import { CLIENTES } from '../../datos/clientes-mock';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private listaClientes = CLIENTES;

  constructor() { }

  getClientes(): Clientes[] {
    return this.listaClientes;
  }

  //Poner exclamacion al final para declarar que puede ser indefinido
  getDetalle(id: number): Clientes{
    return this.listaClientes.find(c => c.id == id)!;
  }

  addCliente(cliente: Clientes): void{
    this.listaClientes.push(cliente);
  }

  delCliente(id: number): boolean {
    //Obtenemos indice
    let indice = this.listaClientes.findIndex(cl => cl.id == id);
    //Borramos empezando por el principio los componentes del indice y le decimos que solo borre 1
    this.listaClientes.slice(indice, 1);
    return true;
  }

  updateCliente(id: number, cliente: Clientes){
    let indice = this.listaClientes.findIndex(cl => cl.id == id);
    //Con esto buscamos el elemento dentro del indice.
    this.listaClientes[indice] = cliente;
  }
}
