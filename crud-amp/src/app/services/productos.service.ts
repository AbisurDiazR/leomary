import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL = 'http://localhost/backend/';

  constructor(private http: HttpClient) { }

  agregarProducto(producto){
    return this.http.post(`${this.URL}agregarProducto.php`,JSON.stringify(producto));
  }

  obtenerProductos(){
    return this.http.get(`${this.URL}obtenerProductos.php`);
  }

  seleccionarProducto(id_producto){
    return this.http.get(`${this.URL}seleccionarProducto.php?id_producto=${id_producto}`);
  }

  borrarProducto(id_producto){
    return this.http.get(`${this.URL}borrarProducto.php?id_producto=${id_producto}`);
  }

  editarProducto(producto){
    return this.http.post(`${this.URL}editarProducto.php`,JSON.stringify(producto));
  }
}
