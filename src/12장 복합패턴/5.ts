// 오리 하나 하나를 관찰하고 싶음.

(() => {

interface Observer {
	update(duck: QuackObservable): void;
}

interface QuackObservable {
	registerObserver(observer: Observer): void;
	notifyObservers(): void;
}

interface Quackable extends QuackObservable {
	quack(): void;
}

class Observable implements QuackObservable {
	observers: Observer[] = [];
	quackObservable: QuackObservable;

	constructor(quackObservable: QuackObservable) {
		this.quackObservable = quackObservable;
	}

	registerObserver(observer: Observer) {
		this.observers.push(observer);
	}

	notifyObservers() {
		this.observers.forEach(observer => observer.update(this.quackObservable));
	}
}

class MallardDuck implements Quackable {
	observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}

	quack() {
		console.log('꽉꽉');
		this.notifyObservers();
	}

	registerObserver(observer: Observer) {
		this.observable.registerObserver(observer);
	}

	notifyObservers() {
		this.observable.notifyObservers();
	}
}

class RedheadDuck implements Quackable {
	observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}


	quack() {
		console.log('꽉꽉');
		this.notifyObservers();
	}

	registerObserver(observer: Observer) {
		this.observable.registerObserver(observer);
	}

	notifyObservers() {
		this.observable.notifyObservers();
	}
}

class DuckCall implements Quackable {
	observable: Observable;

	constructor() {
		this.observable = new Observable(this);
	}

	quack() {
		console.log('꽥꽥');
		this.notifyObservers();
	}

	registerObserver(observer: Observer) {
		this.observable.registerObserver(observer);
	}

	notifyObservers() {
		this.observable.notifyObservers();
	}
}

class RubberDuck implements Quackable {
	observalbe: Observable;
	
	constructor() {
		this.observalbe = new Observable(this);
	}
	
	quack() {
		console.log('삑삑');
	}

	registerObserver(observer: Observer) {
		this.observalbe.registerObserver(observer);
	}

	notifyObservers() {
		this.observalbe.notifyObservers();
	}
}

class Goose {
	honk() {
		console.log('끽끽');
	}
}

class GooseAdapter implements Quackable {
	observalbe: Observable;

	constructor(private goose: Goose) {
		this.observalbe = new Observable(this);
	}

	quack() {
		this.goose.honk();
		this.notifyObservers();
	}

	registerObserver(observer: Observer) {
		this.observalbe.registerObserver(observer);
	}

	notifyObservers() {
		this.observalbe.notifyObservers();
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

	registerObserver(observer: Observer) {
		this.duck.registerObserver(observer);
	}

	notifyObservers() {
		this.duck.notifyObservers();
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

class Flock implements Quackable {
	ducks: Quackable[] = [];

	add(duck: Quackable) {
		this.ducks.push(duck);
	}

	quack() {
		this.ducks.forEach(duck => duck.quack());
	}

	registerObserver(observer: Observer) {
		this.ducks.forEach(duck => duck.registerObserver(observer));
	}

	notifyObservers() {
		this.ducks.forEach(duck => duck.notifyObservers());
	}
}

class Quackologist implements Observer {
	update(duck: QuackObservable) {
		console.log('Quackologist: ', duck);
	}

}


const duckFactory = new CountingDuckFactory();

const mallardDuck = duckFactory.createMallardDuck();
const redheadDuck = duckFactory.createRedheadDuck();
const duckCall = duckFactory.createDuckCall();
const rubberDuck = duckFactory.createRubberDuck();

const flockOfDucks = new Flock();
flockOfDucks.add(mallardDuck);
flockOfDucks.add(redheadDuck);
flockOfDucks.add(duckCall);
flockOfDucks.add(rubberDuck);

const quackologist = new Quackologist();
flockOfDucks.registerObserver(quackologist);

simulate(flockOfDucks);
console.log(QuackCounter.numberOfQuacks);




})()