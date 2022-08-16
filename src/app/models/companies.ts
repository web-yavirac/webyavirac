export class Companie {
	_id?: number; //opcional
	name: string;
	logo: string;
	link: string;
	type: string;

	constructor(name: string, logo: string, link: string, type: string ){
			this.name = name;
			this.logo = logo;
			this.link = link;
			this.type = type;
	}
}
