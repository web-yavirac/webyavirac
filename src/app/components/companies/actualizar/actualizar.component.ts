import { Component} from '@angular/core';
import { Companies } from 'src/app/models/companies';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
 
  companie: Companies = {
    name: '',
    logo: '',
    link: '',
    type: '',
  };
  submitted = false;

  constructor(private companiesService:CompaniesService) { }

  saveCompanies(): void {
    const data = {
      name: this.companie.name,
    	logo: this.companie.logo,
      link: this.companie.link,
      type: this.companie.type,

    };
    this.companiesService.guardarCompanies(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newCompanies(): void {
    this.submitted = false;
    this.companie = {
      name: '',
      logo: '',
      link: '',
      type: '',
    };
  }

}
