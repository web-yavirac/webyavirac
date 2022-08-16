import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CompaniesService } from '../services/companies.service';


@Component({
	selector: 'app-dashboard-pagina',
	templateUrl: './dashboard-pagina.component.html',
	styleUrls: ['./dashboard-pagina.component.css']
})
export class DashboardPaginaComponent {

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