import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuarios = null;

  usuario = {
    id: null,
    nombre: null,
    apellidos: null,
    username: null,
    email: null,
    passwd: null,
    rol: null
  };

  constructor(private usuarioServicio: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuarioServicio.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }

  agregarUsuario(){
    this.usuarioServicio.agregarUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado']=='OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  borrarUsuario(id){
    this.usuarioServicio.borrarUsuario(id).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  seleccionarUsuario(id){
    this.usuarioServicio.seleccionarUsuario(id).subscribe(
      result => this.usuario = result[0]
    );
  }

  editarUsuario(){
    this.usuarioServicio.editarUsuario(this.usuario).subscribe(
      datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }      
    );
  }

}
