(() => {

interface Iterator {
	hasNext(): boolean;
	next(): any;

}

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

class DinerMenuIterator implements Iterator {
	menuItems: MenuItem[];

	position: number = 0;

	constructor(menuItems: MenuItem[]) {
		this.menuItems = menuItems;
	}

	hasNext() {
		return this.position < this.menuItems.length;
	}

	next() {
		const menuItem = this.menuItems[this.position];
		this.position += 1;
		return menuItem;
	}

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
		return new DinerMenuIterator(this.menuItems);
	}

}





})()