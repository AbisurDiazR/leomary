import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-adminproyectos',
  templateUrl: './adminproyectos.component.html',
  styleUrls: ['./adminproyectos.component.scss']
})
export class AdminproyectosComponent implements OnInit {

  proyectos = null;

  clientes = null;

  cliente = {
    id_cliente: null,
    nombre_cliente: null
  }

  constructor(private clientesService: ClientesService, private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerProyectos();
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

  //obtener proyectos
  obtenerProyectos(){
    return this.proyectosService.obtenerProyectos().subscribe(
      result => this.proyectos = result
    );
  }

  //eliminar proyectos
  borrarProyecto(id_proyecto:number){
    return this.proyectosService.borrarProyecto(id_proyecto).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.obtenerProyectos();
        }        
      }
    );
  }

}
