import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AccederComponent } from './components/acceder/acceder.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminproyectosComponent } from './components/adminproyectos/adminproyectos.component';
import { AddprojectComponent } from './components/addproject/addproject.component';
import { AdminproductsComponent } from './components/adminproducts/adminproducts.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'acceder',component:AccederComponent},
  {path:'productos',component:ProductosComponent},
  {path:'control',component:DashboardComponent},
  {path:'projects',component:AdminproyectosComponent},
  {path:'add',component:AddprojectComponent},
  {path:'products',component:AdminproductsComponent},
  {path:'users',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
