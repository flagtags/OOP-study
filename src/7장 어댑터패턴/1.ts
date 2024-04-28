interface Duck {
	quack(): void;
	fly(): void;
}

class MallardDuck implements Duck {
	quack() {
		console.log('Quack');
	}

	fly() {
		console.log('I\'m flying');
	}
}

class Turkey {
	gobble() {
		console.log('Gobble gobble');
	}

	fly() {
		console.log('I\'m flying a short distance');
	}
}

class TurkeyAdapter implements Duck {
	turkey: Turkey;

	constructor(turkey: Turkey) {
		this.turkey = turkey;
	}

	quack() {
		this.turkey.gobble();
	}

	fly() {
		this.turkey.fly();
	}
}

const turkey = new Turkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

turkeyAdapter.quack(); // turkeyAdapter는 Duck이다.