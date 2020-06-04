import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  URL = 'http://localhost/backend/';

  constructor(private hhtp: HttpClient) { }

  //agregamos la categoria a la base de datos
  agregarCategoria(categoria){
    return this.hhtp.post(`${this.URL}agregarCategoria.php`,JSON.stringify(categoria));
  }

  //obtenemos las categorias de la base de datos
  obtenerCategorias(){
    return this.hhtp.get(`${this.URL}obtenerCategorias.php`);
  }
}
