// 객체 생성 부분을 orderPizza에서 분리하자.

(() => {
	class Pizza{
		prepare() {}
	
		bake() {}
	
		cut() {}
	
		box() {}
	}

	class CheesePizza extends Pizza {}

	class GreekPizza extends Pizza {}

	class PepperoniPizza extends Pizza {}


	class SimplePizzaFactory {
		createPizza(type: string) {
			let pizza;

			if (type === 'cheese') {
				pizza = new CheesePizza();
			} else if (type === 'greek') {
				pizza = new GreekPizza();
			}
			else if (type === 'pepperoni') {
				pizza = new PepperoniPizza();
			}

			return pizza;
		}
	}

	class PizzaStore {
		factory: SimplePizzaFactory;

		constructor(factory: SimplePizzaFactory) {
			this.factory = factory;
		}

		orderPizza(type: string) {
			const pizza = this.factory.createPizza(type);

			// 바뀌지 않는 부분
			pizza.prepare();
			pizza.bake();
			pizza.cut();
			pizza.box();

			return pizza;
		}
	}


})();

