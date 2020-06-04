import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadimageService {

  URL = 'http://localhost/productos/';

  constructor(private http:HttpClient) { }

  uploadImagen(archivo){
    return this.http.post(`${this.URL}subirArchivo.php`,JSON.stringify(archivo));
  }
}
