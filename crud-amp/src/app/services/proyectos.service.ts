import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'http://localhost/backend/';

  url = 'http://localhost/';

  constructor(private http: HttpClient) { }

  agregarProyecto(proyecto){
    return this.http.post(`${this.URL}agregarProyecto.php`,JSON.stringify(proyecto));
  }

  agregarFoto(foto){
    return this.http.post(`${this.URL}agregarFoto.php`,JSON.stringify(foto));
  }

  obtenerProyectos(){
    return this.http.get(`${this.URL}obtenerProyectos.php`);
  }

  obtenerFotos(){
    return this.http.get(`${this.URL}obtenerFotos.php`);    
  }

  obtenerFoto(id_proyecto){
    return this.http.get(`${this.URL}seleccionarFoto.php?id_proyecto=${id_proyecto}`)
  }
  

  subirImagen(formData){
    return this.http.post(`${this.url}upload.php`,formData);
  }
}
