import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CompaniesService } from '../services/companies.service';
import { Companies } from '../models/companies';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-dashboard-pagina',
	templateUrl: './dashboard-pagina.component.html',
	styleUrls: ['./dashboard-pagina.component.css']
})
export class DashboardPaginaComponent {
	listCompanies: Companies[] = [];

	constructor(private _companiesService: CompaniesService,
		private toastr: ToastrService) { }

	ngOnInit(): void {
		this.obtenerCompanies();
	}


	obtenerCompanies() {
		this._companiesService.getCompanies().subscribe(data => {
			console.log(data);
			this.listCompanies = data;
		}, error => {
			console.log(error);
		})
	}

	eliminarProducto(id: any) {
		this._companiesService.eliminarCompanies(id).subscribe(data => {
			this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
			this.obtenerCompanies();
		}, error => {
			console.log(error);
		})
	}
	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'Card 1', cols: 1, rows: 1 },
					{ title: 'Card 2', cols: 1, rows: 1 },
					{ title: 'Card 3', cols: 1, rows: 1 },
					{ title: 'Card 4', cols: 1, rows: 1 }
				];
			}

			return [
				{ title: 'Carreras', cols: 2, rows: 1 },
				{ title: 'Noticias', cols: 1, rows: 1 },
				{ title: 'Galería', cols: 1, rows: 2 },
				{ title: 'Docentes', cols: 1, rows: 1 }
			];
		})
	);

	constructor(private breakpointObserver: BreakpointObserver) { }
}
