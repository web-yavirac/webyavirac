import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webyavirac-front';
	cssUrl: string;
	constructor(public sanitizer: DomSanitizer){
		this.cssUrl = './assets/styles/styles1.css';
	}
}
