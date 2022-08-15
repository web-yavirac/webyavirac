import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/companies/crear/crear.component';
import { ListarComponent } from './components/companies/listar/listar.component';

const routes: Routes = [
	{ path:'empresas', component: ListarComponent},
  { path:'crear-empresa', component: CrearComponent},
  { path:'editar-empresa/:id', component: CrearComponent},
  { path:'**', redirectTo:'', pathMatch:'full'}, //redirecciona a la ruta raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

