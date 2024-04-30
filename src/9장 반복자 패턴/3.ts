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

interface Menu {
	createIterator(): Iterator<MenuItem>;
}


class DinerMenu {
	static MAX_ITEMS = 6;

	numberOfItems = 0;

	menuItems: MenuItem[] = [];



	constructor() {
		this.addItem('blt', 'Bacon, lettuce, tomato on whole wheat', false, 2.99);
		this.addItem('veggie blt', 'Bacon, lettuce, tomato on whole wheat', true, 2.99);
	}

	addItem(name: string, description: string, vegetarian: boolean, price: number) {
		const menuItem = new MenuItem(name, description, vegetarian, price);
		if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
			console.error('Sorry, menu is full! Can\'t add item to menu');
		} else {
			this.menuItems.push(menuItem);
			this.numberOfItems += 1;
		}
	}

	createIterator() {
		return this.menuItems[Symbol.iterator]();
	}

}

class Witress {
	dinerMenu: Menu;

	constructor(dinerMenu: Menu) {
		this.dinerMenu = dinerMenu;
	}

	printMenu() {
		const iterator = this.dinerMenu.createIterator();
		let next = iterator.next();

		while (!next.done) {
			const menuItem = next.value;
			console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
			next = iterator.next();
		}
	}
}







})()