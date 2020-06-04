import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UploadimageService } from 'src/app/services/uploadimage.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.scss']
})
export class AdminproductsComponent implements OnInit {
  //Variables para los departamentos
  departamentos = null;

  departamento = {
    id_departamento: null,
    nombre_departamento: null
  };

  //Variables para las categorias
  categorias = null;

  categoria = {
    id_categoria: null,
    nombre_categoria: null
  }

  //variable imagen producto
  archivoImagen = {
    nombre: null,
    nombreArchivo: null,
    base64textString: null
  }

  constructor(private departamentosService: DepartamentosService, private categoriasService: CategoriasService
    , private uploadService: UploadimageService) { }

  ngOnInit(): void {
    this.obtenerDepartamentos();
    this.obtenerCategorias();
  }

  //metodos para los departamentos
  obtenerDepartamentos(){
    this.departamentosService.obtenerDepartamentos().subscribe(
      result => this.departamentos = result
    );
  }

  agregarDepartamento(){
    this.departamentosService.agregarDepartamento(this.departamento).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.obtenerDepartamentos();
        }
      }
    );
  }

  //metodos para las categorias
  obtenerCategorias(){
    this.categoriasService.obtenerCategorias().subscribe(
      result => this.categorias = result
    );
  }

  agregarCategoria(){
    this.categoriasService.agregarCategoria(this.categoria).subscribe(
      datos => {
        if (datos['mensaje']=='OK') {
          alert(datos['mensaje']);
          this.obtenerCategorias();
        }
      }
    );
  }

  //metodos para la seleccion del archivo de imagen
  seleccionarArchivo(event){
    var files = event.target.files;
    var file = files[0];
    this.archivoImagen.nombreArchivo = file.name;

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent){
    var binaryString = readerEvent.target.result;
    this.archivoImagen.base64textString = btoa(binaryString);
  }

  //metodo para subir imagen
  upload(){
    console.log(this.archivoImagen);
    this.uploadService.uploadImagen(this.archivoImagen).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
        }
      }
    );
  }

}
