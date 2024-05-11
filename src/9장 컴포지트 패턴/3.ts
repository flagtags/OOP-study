(() => {


class MenuComponent {
	add(menuComponent: MenuComponent) {
		throw new Error('Unsupported Operation');
	}

	remove(menuComponent: MenuComponent) {
		throw new Error('Unsupported Operation');
	}

	getChild(i: number) {
		throw new Error('Unsupported Operation');
	}

	getName() {
		throw new Error('Unsupported Operation');
	}

	getDescription() {
		throw new Error('Unsupported Operation');
	}

	getPrice() {
		throw new Error('Unsupported Operation');
	}

	isVegetarian() {
		throw new Error('Unsupported Operation');
	}

	print() {
		throw new Error('Unsupported Operation');
	}

}

class MenuItem extends MenuComponent {
	name: string;
	descriptipn: string;
	vegetarian: boolean;
	price: number;

	constructor(name: string, description: string, vegetarian: boolean, price: number) {
		super();
		this.name = name;
		this.descriptipn = description;
		this.vegetarian = vegetarian;
		this.price = price;
	}

	getName() {
		return this.name;
	}

	getDescription() {
		return this.descriptipn;
	}

	getPrice() {
		return this.price;
	}

	isVegetarian() {
		return this.vegetarian;
	}

	print() {
		console.log(`${this.getName()}, ${this.getPrice()} -- ${this.getDescription()}`);
	}
}

class Menu extends MenuComponent {
	menuComponents: MenuComponent[] = [];
	name: string;
	description: string;

	constructor(name: string, description: string) {
		super();
		this.name = name;
		this.description = description;
	}

	add(menuComponent: MenuComponent): void {
		this.menuComponents.push(menuComponent);
	}

	remove(menuComponent: MenuComponent): void {
		this.menuComponents = this.menuComponents.filter((m) => m !== menuComponent);
	}

	getChild(i: number): MenuComponent {
		return this.menuComponents[i];
	}

	getName() {
		return this.name;
	}

	getDescription() {
		return this.description;
	}

	print() {
		console.log(`${this.getName()}, ${this.getDescription()}`);

		for (const m of this.menuComponents) {
			m.print();
		}
	}
}

class Witress {
	allMenus: MenuComponent;

	constructor(allMenus: MenuComponent) {
		this.allMenus = allMenus;
	}

	printMenu() {
		this.allMenus.print();
	}
}







})()