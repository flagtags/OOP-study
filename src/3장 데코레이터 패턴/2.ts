(() => {

	// 문제
	// * 우유 가격이 인상되면..?
	// * 카라멜을 추가하면..?

	// 해결책
	// * 첨가물을 슈퍼클래스에서 관리하자


abstract class Beverage{
	description: string;
	milk: boolean;
	caramel: boolean;
	whip: boolean;
	soy: boolean;

	// 첨가물의 가격을 계산하는 메서드
	cost(): number {
		let cost = 0
		if(this.milk) cost += 0.5
		if(this.caramel) cost += 0.5
		if(this.whip) cost += 0.5
		if(this.soy) cost += 0.5
		return cost
	}

	abstract getDescription(): string
}


// 이런식으로 전부 다 만들어야함
class HouseBlendWithSteamedMilk extends Beverage{
	cost(): number {
		// 음료 가격에 첨가물 가격을 더한다.
		return 0.7 + super.cost()
	}
	getDescription(): string {
		return 'HouseBlendWithSteamedMilk'
	}
}

})()