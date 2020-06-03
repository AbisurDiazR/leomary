import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  URL = 'http://localhost/backend/';

  constructor(private http: HttpClient) { }

  //Agregamos un nuevo departamento a la base de datos
  agregarDepartamento(departamento){
    return this.http.post(`${this.URL}agregarDepartamento.php`,JSON.stringify(departamento));
  }

  //obtenemos los departamenos desde la base de datos
  obtenerDepartamentos(){
    return this.http.get(`${this.URL}obtenerDepartamentos.php`);
  }
}
