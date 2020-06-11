import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  fotos = null;

  proyectos = null;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.obtenerFotos();
    this.obtenerProyectos();
  }

  obtenerFotos(){
    return this.proyectosService.obtenerFotos().subscribe(
      result => this.fotos = result
    );    
  }

  obtenerProyectos(){
    return this.proyectosService.obtenerProyectos().subscribe(
      result => this.proyectos = result
    );
  }

  obtenerFoto(id_proyecto:number){
    return this.proyectosService.obtenerFoto(id_proyecto).subscribe(
      result => this.fotos = result
    );
  }

}
