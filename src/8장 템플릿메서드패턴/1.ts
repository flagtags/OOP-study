class Coffee {
	prepareRecipe(): void {
		this.boilWater();
		this.brewCoffeeGrinds();
		this.pourInCup();
		this.addSugarAndMilk();
	}

	boilWater(): void {
		console.log('물 끓이는 중');
	}

	brewCoffeeGrinds(): void {
		console.log('커피 내리는 중');
	}

	pourInCup(): void {
		console.log('컵에 따르는 중');
	}

	addSugarAndMilk(): void {
		console.log('설탕과 우유를 추가하는 중');
	}
}

class Tea {
	prepareRecipe(): void {
		this.boilWater();
		this.steepTeaBag();
		this.pourInCup();
		this.addLemon();
	}

	boilWater(): void {
		console.log('물 끓이는 중');
	}

	steepTeaBag(): void {
		console.log('차를 우리는 중');
	}

	pourInCup(): void {
		console.log('컵에 따르는 중');
	}

	addLemon(): void {
		console.log('레몬을 추가하는 중');
	}
}

