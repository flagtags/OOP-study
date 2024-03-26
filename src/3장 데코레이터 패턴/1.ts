(() => {


abstract class Beverage{
	abstract cost(): number
	abstract getDescription(): string
}


// 이런식으로 전부 다 만들어야함
class HouseBlendWithSteamedMilk extends Beverage{
	cost(): number {
		return 1.5
	}
	getDescription(): string {
		return 'HouseBlendWithSteamedMilk'
	}
}

})()