import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {

  //urls de las imagenes selccionadas
  urls = [];

  //variables para el cliente
  clientes = null;

  cliente = {
    id_cliente: null,
    nombre_cliente: null
  }

  constructor(private clientesService: ClientesService) { }

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

  //metodo para seleccionar imagenes
  selectedImages(event){
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        
        reader.onload = (event:any) => {
          console.log(event.target.result);
          this.urls.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
