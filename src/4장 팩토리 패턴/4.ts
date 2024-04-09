// 원재료를 생산하는 공장을 만들고 지점까지 재료를 배달.
// 지점마다 다른 재료를 보낼 수 있어야 한다.

(() => {
	abstract class Pizza{
		abstract prepare(): void;
	
		bake() {}
	
		cut() {}
	
		box() {}
	}


	class NYStyleCheesePizza extends Pizza {
		ingredientFactory: PizzaIngredientFactory;

		constructor(ingredientFactory: PizzaIngredientFactory) {
			super();
			this.ingredientFactory = ingredientFactory;
		}

		prepare(): void {
			const dough = this.ingredientFactory.createDough();
			const sauce = this.ingredientFactory.createSauce();
			const cheese = this.ingredientFactory.createCheese();
		}
	}

	class NYStyleGreekPizza extends Pizza {
		ingredientFactory: PizzaIngredientFactory;

		constructor(ingredientFactory: PizzaIngredientFactory) {
			super();
			this.ingredientFactory = ingredientFactory;
		}

		prepare(): void {
			const dough = this.ingredientFactory.createDough();
			const sauce = this.ingredientFactory.createSauce();
			const cheese = this.ingredientFactory.createCheese();
		}
	}

	class NYStylePepperoniPizza extends Pizza {
		ingredientFactory: PizzaIngredientFactory;

		constructor(ingredientFactory: PizzaIngredientFactory) {
			super();
			this.ingredientFactory = ingredientFactory;
		}

		prepare(): void {
			const dough = this.ingredientFactory.createDough();
			const sauce = this.ingredientFactory.createSauce();
			const cheese = this.ingredientFactory.createCheese();
		}
	}

	class ChicagoStyleCheesePizza extends Pizza {
		ingredientFactory: PizzaIngredientFactory;

		constructor(ingredientFactory: PizzaIngredientFactory) {
			super();
			this.ingredientFactory = ingredientFactory;
		}

		prepare(): void {
			const dough = this.ingredientFactory.createDough();
			const sauce = this.ingredientFactory.createSauce();
			const cheese = this.ingredientFactory.createCheese();
		}
	}

	class ChicagoStyleGreekPizza extends Pizza {
		ingredientFactory: PizzaIngredientFactory;

		constructor(ingredientFactory: PizzaIngredientFactory) {
			super();
			this.ingredientFactory = ingredientFactory;
		}

		prepare(): void {
			const dough = this.ingredientFactory.createDough();
			const sauce = this.ingredientFactory.createSauce();
			const cheese = this.ingredientFactory.createCheese();
		}
	}

	class ChicagoStylePepperoniPizza extends Pizza {
		ingredientFactory: PizzaIngredientFactory;

		constructor(ingredientFactory: PizzaIngredientFactory) {
			super();
			this.ingredientFactory = ingredientFactory;
		}

		prepare(): void {
			const dough = this.ingredientFactory.createDough();
			const sauce = this.ingredientFactory.createSauce();
			const cheese = this.ingredientFactory.createCheese();
		}
	}

// 추상 팩토리
abstract class PizzaIngredientFactory {
	createDough() {}
	createSauce() {}
	createCheese() {}
	createVeggies() {}
	createPepperoni() {}
	createClam() {}
}

class NYPizzaIngredientFactory extends PizzaIngredientFactory {
	createDough() {}
	createSauce() {}
	createCheese() {}
	createVeggies() {}
	createPepperoni() {}
	createClam() {}
}

class ChicagoIngredientFactory extends PizzaIngredientFactory {
	createDough() {}
	createSauce() {}
	createCheese() {}
	createVeggies() {}
	createPepperoni() {}
	createClam() {}
}


	// 이제 pizza store는 pizza 구상 클래스에 전혀 의존하지 않는다.
	// pizza store와 pizza는 분리되어 있다.
abstract class PizzaStore {
	orderPizza(type: string) {
		const pizza = this.createPizza(type);

		// 바뀌지 않는 부분
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

	// 팩토리 메서드: 팩토리 메서드로 객체 생성을 서브클래스에게 위임.
	// 슈퍼 클래스와 클라이언트 코드를 분리할 수 있다.
	abstract createPizza(type: string): Pizza;
}

// 각 지점마다 달라지는 것은 피자의 스타일

class NYPizzaStore extends PizzaStore {
	createPizza(type: string) {
		const ingredientFactory = new NYPizzaIngredientFactory();

		let pizza

		if (type === 'cheese') {
			pizza = new NYStyleCheesePizza(ingredientFactory);
		} else if (type === 'greek') {
			pizza = new NYStyleGreekPizza(ingredientFactory);
		}
		else if (type === 'pepperoni') {
			pizza = new NYStylePepperoniPizza(ingredientFactory);
		}

		return pizza;

	}
}

class ChicagoPizzaStore extends PizzaStore {
	ingredientFactory: PizzaIngredientFactory;

	createPizza(type: string) {
		const ingredientFactory = new ChicagoIngredientFactory();
		
		
		let pizza

		if (type === 'cheese') {
			pizza = new ChicagoStyleCheesePizza(ingredientFactory);
		} else if (type === 'greek') {
			pizza = new ChicagoStyleGreekPizza(ingredientFactory);
		}
		else if (type === 'pepperoni') {
			pizza = new ChicagoStylePepperoniPizza(ingredientFactory);
		}
		return pizza;
	}
}

})();

