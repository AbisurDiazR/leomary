import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = 'http://localhost/backend/'

  constructor(private http: HttpClient) {}

  obtenerUsuarios(){
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }

  agregarUsuario(usuario){
    return this.http.post(`${this.URL}AgregarUsuario.php`,JSON.stringify(usuario));
  }

  borrarUsuario(idUsuario:number){
    return this.http.get(`${this.URL}borrarUsuario.php?id=${idUsuario}`);
  }

  seleccionarUsuario(idUsuario:number){
    return this.http.get(`${this.URL}seleccionarUsuario.php?id=${idUsuario}`);
  }

  editarUsuario(usuario){
    return this.http.post(`${this.URL}editarUsuario.php`,JSON.stringify(usuario));
  }
}
