// 여러 스타일의 피자를 만들고 싶다.
// 그리고 지점마다 굽는 방식, 자르는 방식, 포장하는 방식이 다르다.

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

	class NYStyleCheesePizza extends Pizza {}

	class NYStyleGreekPizza extends Pizza {}

	class NYStylePepperoniPizza extends Pizza {}

	class ChicagoStyleCheesePizza extends Pizza {}

	class ChicagoStyleGreekPizza extends Pizza {}

	class ChicagoStylePepperoniPizza extends Pizza {}


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
		let pizza

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

class ChicagoPizzaStore extends PizzaStore {
	createPizza(type: string) {
		let pizza

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

})();

