import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-adminproyectos',
  templateUrl: './adminproyectos.component.html',
  styleUrls: ['./adminproyectos.component.scss']
})
export class AdminproyectosComponent implements OnInit {

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
  agregarCliente(cliente){
    return this.clientesService.agregarCliente(cliente).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerClientes();
        }
      }
    );
  }

}
