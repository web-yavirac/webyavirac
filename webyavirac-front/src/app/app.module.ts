import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ListarNoticiasComponent } from './components/listar-noticias/listar-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NoticiasComponent,
    ListarNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
