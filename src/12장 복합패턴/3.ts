// 어쩌다 counter를 붙이는걸 까먹는 경우가 있다.
// 오리 생성을 캡슐화 해서 빠지지 않도록 해준다.

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

abstract class AbstractDuckFactory {
	abstract createMallardDuck(): Quackable;
	abstract createRedheadDuck(): Quackable;
	abstract createDuckCall(): Quackable;
	abstract createRubberDuck(): Quackable;
}

class CountingDuckFactory extends AbstractDuckFactory {
	createDuckCall(): Quackable {
		return new QuackCounter(new DuckCall());
	}

	createMallardDuck(): Quackable {
		return new QuackCounter(new MallardDuck());
	}

	createRedheadDuck(): Quackable {
		return new QuackCounter(new RedheadDuck());
	}

	createRubberDuck(): Quackable {
		return new QuackCounter(new RubberDuck());
	}

	createGooseAdapter(): Quackable {
		return new GooseAdapter(new Goose());
	}
}

const duckFactory = new CountingDuckFactory();

const mallardDuck = duckFactory.createMallardDuck();
const redheadDuck = duckFactory.createRedheadDuck();
const duckCall = duckFactory.createDuckCall();
const rubberDuck = duckFactory.createRubberDuck();


simulate(mallardDuck);
simulate(redheadDuck);
simulate(duckCall);
simulate(rubberDuck);
simulate(new GooseAdapter(new Goose()));

console.log(QuackCounter.numberOfQuacks);




})()