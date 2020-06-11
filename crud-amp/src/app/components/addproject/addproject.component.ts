import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  nombreArchivo:string = '';

  result:string = '';

  //urls de las imagenes selccionadas
  urls = [];

  //variables para el cliente
  clientes = null;

  cliente = {
    id_cliente: null,
    nombre_cliente: null
  }

  //variables fotos
  foto = {
    id_foto: null,
    nombre_foto: null,
    proyecto_foto: null 
  }

  //variables proyecto
  proyectos = null;

  proyecto = {
    id_proyecto: null,
    nombre_proyecto: null,
    ubicacion_proyecto: null,
    inicio_proyecto: null,
    fin_proyecto: null,
    rol_proyecto: null,
    cliente_proyecto: null
  }

  //variables de archivo de la imagen
  base64 = [];
  names = [];
  imagenes = [];

  myFiles:string [] = [];
    

  constructor(private clientesService: ClientesService, private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  //metodo para obtener clientes
  obtenerClientes(){
    return this.clientesService.obtenerClientes().subscribe(
      result => this.clientes = result
    );
  }

  //metodo para agregar clientes
  agregarCliente(){
    return this.clientesService.agregarCliente(this.cliente).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerClientes();
        }
      }
    );
  }

  //metodo para seleccionar base64
  selectedImages(event){
    var selectedFiles = event.target.files;
    for (var i = 0; i < selectedFiles.length; i++) {
      this.myFiles.push(selectedFiles[i]);
      this.names.push(selectedFiles[i].name);            
    }

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;      
      for (let i = 0; i < filesAmount; i++) { 
        console.log(event.target.files[i].name);
        console.log('<----------------<');      
        var reader = new FileReader();        
        
        //this.names.push(event.target.files[i].name);
        reader.onload = (event:any) => {
          this.urls.push(event.target.result);          
          //console.log(event.target.result);          
        }

        this.base64 = this.urls;

        reader.readAsDataURL(event.target.files[i]);
      }            
    }
  }

  //metodo agregar proyecto
  agregarProyecto(){
    console.log(this.proyecto);
    return this.proyectosService.agregarProyecto(this.proyecto).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.agregarFotos();
        }
      }
    );
  }

  agregarFotos(){
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("file[]",this.myFiles[i]);      
      console.log(this.myFiles[i]['name']);
      var foto = {
        id_foto: null,
        nombre_foto: this.myFiles[i]['name'], 
      };      
      this.imagenes.push(foto);
    }

    this.proyectosService.subirImagen(formData).subscribe(
      res => {
        console.log(res);
        alert('Upload Successfully')
      }
    );

    //console.log(this.imagenes);
    /*for (let i = 0; i < this.imagenes.length; i++) {
      console.log(this.imagenes[i]['nombre_foto']);
      this.proyectosService.agregarFoto(this.imagenes[i]).subscribe(
        datos => {
          if (datos['resultado'] == 'OK') {
            console.log(datos['mensaje']);
          }
        }
      );      
    }*/
  }
}
