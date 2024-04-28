(() => {



abstract class CaffeineBeverage {
	prepareRecipe(): void {
		this.boilWater();
		this.brew();
		this.pourInCup();
		this.addCondiments();
	} 

	abstract brew(): void;

	abstract addCondiments(): void;

	boilWater(): void {
		console.log('물 끓이는 중');
	}

	pourInCup(): void {
		console.log('컵에 따르는 중');
	}
}

abstract class CaffeineBeverageWithHook {
	prepareRecipe(): void {
		this.boilWater();
		this.brew();
		this.pourInCup();
		if (this.customerWantsCondiments()) {
			this.addCondiments();
		}
	} 

	abstract brew(): void;

	abstract addCondiments(): void;

	customerWantsCondiments(): boolean {
		return true;
	};

	boilWater(): void {
		console.log('물 끓이는 중');
	}

	pourInCup(): void {
		console.log('컵에 따르는 중');
	}
}

class Coffee extends CaffeineBeverageWithHook {
	brew(): void {
		console.log('커피 내리는 중');
	}

	addCondiments(): void {
		console.log('설탕과 우유를 추가하는 중');
	}

	customerWantsCondiments(): boolean {
		const answer = 'y'; // getUserInput();

		if (answer === 'y') {
			return true;
		}

		return false;
	}
}

class Tea extends CaffeineBeverage {
	brew(): void {
		console.log('차를 우리는 중');
	}

	addCondiments(): void {
		console.log('레몬을 추가하는 중');
	}
}
	

})()


