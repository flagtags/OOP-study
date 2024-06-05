// 꽥꽥 소리를 낸 횟수를 세려면?

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

class QuackCounter implements Quackable {
	duck: Quackable;
	static numberOfQuacks = 0;

	constructor(duck: Quackable) {
		this.duck = duck;
	}

	quack() {
		this.duck.quack();
		QuackCounter.numberOfQuacks++;
	}
}

// simulate(new MallardDuck());
// simulate(new RedheadDuck());
// simulate(new DuckCall());
// simulate(new RubberDuck());
// simulate(new GooseAdapter(new Goose()));

const mallardDuck = new MallardDuck();
const redheadDuck = new RedheadDuck();
const duckCall = new DuckCall();
const rubberDuck = new RubberDuck();
const gooseAdapter = new GooseAdapter(new Goose());

const mallardDuckCounter = new QuackCounter(mallardDuck);
const redheadDuckCounter = new QuackCounter(redheadDuck);
const duckCallCounter = new QuackCounter(duckCall);
const rubberDuckCounter = new QuackCounter(rubberDuck);
const gooseAdapterCounter = new QuackCounter(gooseAdapter);

simulate(mallardDuckCounter);
simulate(redheadDuckCounter);
simulate(duckCallCounter);
simulate(rubberDuckCounter);
simulate(gooseAdapterCounter);

console.log(QuackCounter.numberOfQuacks);




})()