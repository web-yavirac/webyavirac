import { Component, OnInit } from '@angular/core';
import { Companie } from 'src/app/models/companies';
import { CompanieService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-listar',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  listCompanies: Companie[] = [];
  
  constructor(private _companieService: CompanieService,
        ) { }

  ngOnInit(): void {
    this.obtenerCompanies();
  }


  obtenerCompanies() {
    this._companieService.getCompanie().subscribe(data => {
      console.log(data);
      this.listCompanies = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarCompanie(id: any) {
    this._companieService.eliminarCompanie(id).subscribe(data => {
      this.obtenerCompanies();
    }, error => {
      console.log(error);
    })
  }

}
