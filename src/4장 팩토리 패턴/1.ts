(() => {
	class Pizza{
		prepare() {}
	
		bake() {}
	
		cut() {}
	
		box() {}
	}

	class CheesePizza extends Pizza {

	}

	class GreekPizza extends Pizza {

	}

	class PepperoniPizza extends Pizza {

	}
	
function orderPizza(type: string) {
	let pizza;

	// 바뀌는 부분.. 변경에 닫혀있지 않다.
	// 가장 문제점은 인스턴스를 만드는 구상 클래스를 선택하는 부분
	if (type === 'cheese') {
		pizza = new CheesePizza();
	} else if (type === 'greek') {
		pizza = new GreekPizza();
	}
	else if (type === 'pepperoni') {
		pizza = new PepperoniPizza();
	}



	// 바뀌지 않는 부분
	pizza.prepare();
	pizza.bake();
	pizza.cut();
	pizza.box();

	return pizza;
}


})();

