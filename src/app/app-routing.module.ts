import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPaginaComponent } from './dashboard-pagina/dashboard-pagina.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { NavegationComponent } from './navegation/navegation.component';
import { AgregarComponent } from './components/companies/agregar/agregar.component';


const routes: Routes = [
	{ path:'empresas', component: CompaniesComponent},
  { path:'crear-empresa', component: AgregarComponent},
  { path:'editar-empresa/:id', component: AgregarComponent},
  { path:'**', redirectTo:'', pathMatch:'full'}, //redirecciona a la ruta raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }