import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UploadimageService } from 'src/app/services/uploadimage.service';
import { ProductosService } from 'src/app/services/productos.service';

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

  //variables para administrar productos
  productos = null;

  producto = {
    id_producto: null,
    clave_producto: null,
    categoria_producto: null,
    departamento_producto: null,
    concepto_producto: null,
    precio_producto: null,
    foto_producto: null
  }

  constructor(private departamentosService: DepartamentosService, private categoriasService: CategoriasService
    , private uploadService: UploadimageService, private productoService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerDepartamentos();
    this.obtenerCategorias();
    this.obtenerProductos();
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

  //metod para agregar producto
  agregarProducto(){
    this.producto.foto_producto = this.archivoImagen.nombreArchivo;
    this.productoService.agregarProducto(this.producto).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.upload();
          this.obtenerProductos();
        }
      }
    );
  }

  //metodo para obtener productos
  obtenerProductos(){
    this.productoService.obtenerProductos().subscribe(
      result => this.productos = result
    );
  }

  //metodo para selccionar producto
  seleccionarProducto(id:number){
    this.productoService.seleccionarProducto(id).subscribe(
      result => this.producto = result[0]
    );
  }

  //metodo para borrar producto
  borrarProducto(id:number){
    this.productoService.borrarProducto(id).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.obtenerProductos();
        }
      }
    );
  }

  //metodo para actualizar producto
  editarProducto(){
    this.producto.foto_producto = this.archivoImagen.nombreArchivo;
    this.productoService.editarProducto(this.producto).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.upload();
          this.obtenerProductos();
        }
      }
    );
  }

}
