import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.scss']
})
export class AdminproductsComponent implements OnInit {

  departamentos = null;

  departamento = {
    id_departamento: null,
    nombre_departamento: null
  };

  constructor(private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.obtenerDepartamentos();
  }

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

}
