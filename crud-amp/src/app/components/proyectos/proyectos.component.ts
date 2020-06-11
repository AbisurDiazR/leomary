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

  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  }; 

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.obtenerFotos();
    this.obtenerProyectos();
    //this.loadUrls();
  }

  obtenerFotos(){
    this.proyectosService.obtenerFotos().subscribe(
      result => this.fotos = result
    );
        
  }

  obtenerProyectos(){
    return this.proyectosService.obtenerProyectos().subscribe(
      result => this.proyectos = result
    );
  }

}
