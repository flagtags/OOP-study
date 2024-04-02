(() => {

	// 문제
	// - 첨가물 가격이 바뀔때마다 기존 코드를 수정해야 됨.
	// - 첨가물의 종류가 많아지면 새로운 메서드를 추가하고, cost도 고쳐야 함.
	// - 더블 모카처럼 중첩해서 들어가는건?
	// - 특정 첨가물이 들어가면 안 되는 음료도 상속을 받게됨

	// 해결책
	// * 특정 음료에서 시작해서 음료를 장식해보자(데코레이터 패턴)


abstract class Beverage{
	description: string;

	abstract cost(): number


	getDescription(): string {
		return this.description
	}
}


class HouseBlend extends Beverage{
	cost(): number {
		return 1.5
	}
}

class DarkRoast extends Beverage{
	cost(): number {
		return 1.2
	}

	getDescription(): string {
		return 'DarkRoast'
	}
}

class Decaf extends Beverage{
	cost(): number {
		return 1.3
	}

	getDescription(): string {
		return 'Decaf'
	}

}

// 첨가물

abstract class CondimentDecorator extends Beverage{
	abstract getDescription(): string
}

class Milk extends CondimentDecorator{
	beverage: Beverage

	constructor(beverage: Beverage){
		super()
		this.beverage = beverage
	}

	cost(): number {
		return 0.5 + this.beverage.cost()
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Milk'
	}
}

class Soy extends CondimentDecorator{
	beverage: Beverage

	constructor(beverage: Beverage){
		super()
		this.beverage = beverage
	}

	cost(): number {
		return 0.3 + this.beverage.cost()
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Soy'
	}
}

})()