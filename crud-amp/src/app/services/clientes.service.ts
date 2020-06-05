import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL = 'http://localhost/backend/';

  constructor(private http: HttpClient) { }

  //Metodo para agregar un nuevo cliente
  agregarCliente(cliente){
    return this.http.post(`${this.URL}agregarCliente.php`,JSON.stringify(cliente));    
  }

  //obtener clientes
  obtenerClientes(){
    return this.http.get(`${this.URL}obtenerClientes.php`);
  }
}
