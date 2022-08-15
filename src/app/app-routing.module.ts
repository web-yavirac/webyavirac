import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPaginaComponent } from './dashboard-pagina/dashboard-pagina.component';

const routes: Routes = [
	{ path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home' , component: DashboardPaginaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

