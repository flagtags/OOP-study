(() => {


// 추가할 기능
// * 원격으로 모니터링 하고 싶다.

abstract class State {
	abstract insertQuarter(): void;
	abstract ejectQuarter(): void;
	abstract turnCrank(): void;
	abstract dispense(): void;
}

class SoldOutState extends State {
	constructor(private gumballMachine: GumbalMachine) {
		super();
	}

	insertQuarter() {
		console.log('매진되었습니다');
	}

	ejectQuarter() {
		console.log('동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다');
	}

	turnCrank() {
		console.log('매진되었습니다');
	}

	dispense() {
		console.log('매진되었습니다');
	}
}

// class GumbalMachine {

// 	private state: State;

// 	private count = 0;

// 	private location: string;

// 	constructor(count: number, location: string) {
// 		this.count = count;
// 		// 그냥 이렇게 가정.
// 		this.state = new SoldOutState(this);

// 		this.location
// 	}

// 	getCount() {
// 		return this.count;
// 	}

// 	getState() {
// 		return this.state;
// 	}

// 	getLocation() {
// 		return this.location;
// 	}

// }

interface GumbalMachine {
	getCount(): number;
	getState(): State;
	getLocation(): string;
}

class GumbalMachineRemote implements GumbalMachine {
	private state: State;

	private count = 0;

	private location: string;

	constructor(count: number, location: string) {
		
		this.count = count;
		// api 호출
		this.state = new SoldOutState(this);

		this.location
	}

	getCount() {
		// api 호출
		return this.count;
	}

	getState() {
		// api 호출
		return this.state;
	}

	getLocation() {
		// api 호출
		return this.location;
	}
}

class GumballMonitor {
	gumballMachine: GumbalMachine;

	constructor(gumballMachine: GumbalMachine) {
		this.gumballMachine = gumballMachine;
	}

	report() {
		console.log('뽑기 기계 보고서');
		console.log('현재 재고: ' + this.gumballMachine.getCount());
		console.log('현재 상태: ' + this.gumballMachine.getState());
		console.log('현재 위치: ' + this.gumballMachine.getLocation());
	}
}

const main = () => {
	const gumballMachine = new GumbalMachineRemote(5, '서울');
	const monitor = new GumballMonitor(gumballMachine);

	monitor.report();
}


main();



})()