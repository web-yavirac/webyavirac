import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Companie } from 'src/app/models/companie';
import { CompanieService } from 'src/app/services/companies/companie.service';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  companieForm: FormGroup;
  titulo = 'Crear empresa';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _companieService: CompanieService,
              private aRouter: ActivatedRoute) { 
    this.companieForm = this.fb.group({
      name: ['', Validators.required],
      logo: ['', Validators.required],
      link: ['', Validators.required],
      type: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCompanie() {

    const COMPANIE: Companie = {
      name: this.companieForm.get('name')?.value,
      logo: this.companieForm.get('logo')?.value,
      link: this.companieForm.get('link')?.value,
      type: this.companieForm.get('type')?.value,
    }

    console.log(COMPANIE);
    this._companieService.guardarCompanie(COMPANIE).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.companieForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar empresa';
      this._companieService.obtenerCompanie(this.id).subscribe(data => {
        this.companieForm.setValue({
          name: data.name,
          logo: data.logo,
          link: data.link,
          type: data.type,
        })
      })
    }
  }

}
