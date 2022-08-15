import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPaginaComponent } from './dashboard-pagina/dashboard-pagina.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { NavegationComponent } from './navegation/navegation.component';

const routes: Routes = [

	{path:'home' , component: DashboardPaginaComponent},
  {path:'tables' , component: NavegationComponent},

  {path:'companies' , component: CompaniesComponent},
	{ path:'*', redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

