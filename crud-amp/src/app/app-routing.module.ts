import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AccederComponent } from './components/acceder/acceder.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'acceder',component:AccederComponent},
  {path:'productos',component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
