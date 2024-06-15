(() => {



interface Quackable {
	quack(): void;
}

class MallardDuck implements Quackable {
	quack() {
		console.log('꽉꽉');
	}
}

class RedheadDuck implements Quackable {
	quack() {
		console.log('꽉꽉');
	}
}

class DuckCall implements Quackable {
	quack() {
		console.log('꽥꽥');
	}
}

class RubberDuck implements Quackable {
	quack() {
		console.log('삑삑');
	}
}

class Goose {
	honk() {
		console.log('끽끽');
	}
}

class GooseAdapter implements Quackable {
	constructor(private goose: Goose) {}

	quack() {
		this.goose.honk();
	}
}

function simulate(duck: Quackable) {
	duck.quack();

}

simulate(new MallardDuck());
simulate(new RedheadDuck());
simulate(new DuckCall());
simulate(new RubberDuck());
simulate(new GooseAdapter(new Goose()));




})()