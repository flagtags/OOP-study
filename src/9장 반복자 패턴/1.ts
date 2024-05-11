(() => {



class MenuItem {
	name: string;

	description: string;

	vegetarian: boolean;

	price: number;

	constructor(name: string, description: string, vegetarian: boolean, price: number) {
		this.name = name;
		this.description = description;
		this.vegetarian = vegetarian;
		this.price = price;
	}

	getName() {
		return this.name;
	}

	getDescription() {
		return this.description;
	}

	isVegetarian() {
		return this.vegetarian;
	}

	getPrice() {
		return this.price;
	}
}





})()