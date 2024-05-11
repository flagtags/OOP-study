(() => {


// 10분의 1의 확률로 뽑기가 2개 나오도록 하고싶다.
// 당첨 상태 추가.

// 상태별 행동을 별도의 클래스에 넣어두고 모든 상태에서 각각 자기가 할 일을 구현하도록 한다.
// 그리고, 뽑기 기계가 현재 상태를 나타내는 상태에게 작업을 넘기게 한다.

// 뽑기 기계와 관련된 모든 행동 메서드가 있는 State 인터페이스를 만든다.
// State 인터페이스를 구현하는 클래스를 만든다.
// 조건문 코드를 없애고 상태 객체에게 작업을 위임한다.

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

class NoQuarterState extends State {
	constructor(private gumballMachine: GumbalMachine) {
		super();
	}

	insertQuarter() {
		console.log('동전을 넣으셨습니다');
		this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
	}

	ejectQuarter() {
		console.log('동전을 넣어주세요');
	}

	turnCrank() {
		console.log('동전을 넣어주세요');
	}

	dispense() {
		console.log('동전을 넣어주세요');
	}
}

class HasQuarterState extends State {
	constructor(private gumballMachine: GumbalMachine) {
		super();
	}

	insertQuarter() {
		console.log('동전은 한 개만 넣어주세요');
	}

	ejectQuarter() {
		console.log('동전이 반환됩니다');
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}

	turnCrank() {
		console.log('손잡이를 돌리셨습니다');
		this.gumballMachine.setState(this.gumballMachine.getSoldState());
	}

	dispense() {
		console.log('동전을 넣어주세요');
	}
}

class SoldState extends State {
	constructor(private gumballMachine: GumbalMachine) {
		super();
	}

	insertQuarter() {
		console.log('잠시만 기다려주세요. 알맹이가 나가고 있습니다');
	}

	ejectQuarter() {
		console.log('이미 알맹이를 뽑으셨습니다');
	}

	turnCrank() {
		console.log('손잡이는 한 번만 돌려주세요');
	}

	dispense() {
		this.gumballMachine.releaseBall();
		if (this.gumballMachine.getCount() > 0) {
			this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
		} else {
			console.log('더 이상 알맹이가 없습니다');
			this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
		}
	}
}

// State 인터페이스에서 모든 행동을 구현해야 한다.
// 그런데 GumbalMachine에서도 모든 행동을 구현해야 하는데 State를 상속하지 않았을까?

// dispense 메서드는 상태에는 필요하지만 사용자가 기계에 뽑기를 내놓으라고 할 수는 없다.
// 그래서 상속을 안 한 것 같다.
class GumbalMachine {
	private soldOutState: State;
	private noQuarterState: State;
	private hasQuarterState: State;
	private soldState: State;

	private state: State;

	private count = 0;

	constructor(count: number) {
		this.count = count;
		this.soldOutState = new SoldOutState(this);
		this.noQuarterState = new NoQuarterState(this);
		this.hasQuarterState = new HasQuarterState(this);
		this.soldState = new SoldState(this);

		if (count > 0) {
			this.state = this.noQuarterState;
		} else {
			this.state = this.soldOutState;
		}
	}

	insertQuarter() {
		this.state.insertQuarter();
	}

	ejectQuarter() {
		this.state.ejectQuarter();
	}

	trunCrank() {
		this.state.turnCrank();
		this.state.dispense();
	}

	setState(state: State) {
		this.state = state;
	}

	getSoldOutState() {
		return this.soldOutState;
	}

	getNoQuarterState() {
		return this.noQuarterState;
	}

	getHasQuarterState() {
		return this.hasQuarterState;
	}

	getSoldState() {
		return this.soldState;
	}

	releaseBall() {
		console.log('알맹이가 나가고 있습니다');
		this.count--;
	}

	getCount() {
		return this.count;
	}

}



})()