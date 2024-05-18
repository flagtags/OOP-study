(() => {


class GumbalMachine {
	static SOLD_OUT = 0;
	static NO_QUARTER = 1;
	static HAS_QUARTER = 2;
	static SOLD = 3;

	state = GumbalMachine.SOLD_OUT;
	count = 0;

	constructor(count: number) {
		this.count = count;
		if (count > 0) {
			this.state = GumbalMachine.NO_QUARTER;
		}
	}

	insertQuarter() {
		if (this.state === GumbalMachine.HAS_QUARTER) {
			console.log('동전은 한 개만 넣어주세요');
		} else if (this.state === GumbalMachine.NO_QUARTER) {
			this.state = GumbalMachine.HAS_QUARTER;
			console.log('동전을 넣으셨습니다');
		} else if (this.state === GumbalMachine.SOLD_OUT) {
			console.log('매진되었습니다. 다음 기회에 이용해주세요');
		} else if (this.state === GumbalMachine.SOLD) {
			console.log('잠시만 기다려주세요. 알맹이가 나가고 있습니다');
		}
	}


	ejectQuarter() {
		if (this.state === GumbalMachine.HAS_QUARTER) {
			console.log('동전이 반환됩니다');
			this.state = GumbalMachine.NO_QUARTER;
		} else if (this.state === GumbalMachine.NO_QUARTER) {
			console.log('동전을 넣어주세요');
		} else if (this.state === GumbalMachine.SOLD) {
			console.log('이미 알맹이를 뽑으셨습니다');
		} else if (this.state === GumbalMachine.SOLD_OUT) {
			console.log('동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다');
		}
	}

	turnCrank() {
		if (this.state === GumbalMachine.SOLD) {
			console.log('손잡이는 한 번만 돌려주세요');
		} else if (this.state === GumbalMachine.NO_QUARTER) {
			console.log('동전을 넣어주세요');
		} else if (this.state === GumbalMachine.SOLD_OUT) {
			console.log('매진되었습니다');
		} else if (this.state === GumbalMachine.HAS_QUARTER) {
			console.log('손잡이를 돌리셨습니다');
			this.state = GumbalMachine.SOLD;
			this.dispense();
		}
	}

	dispense() {
		if (this.state === GumbalMachine.SOLD) {
			console.log('알맹이가 나가고 있습니다');
			this.count--;
			if (this.count === 0) {
				console.log('더 이상 알맹이가 없습니다');
				this.state = GumbalMachine.SOLD_OUT;
			} else {
				this.state = GumbalMachine.NO_QUARTER;
			}
		} else if (this.state === GumbalMachine.NO_QUARTER) {
			console.log('동전을 넣어주세요');
		} else if (this.state === GumbalMachine.SOLD_OUT) {
			console.log('매진입니다');
		} else if (this.state === GumbalMachine.HAS_QUARTER) {
			console.log('알맹이가 나갈 수 없습니다');
		}
	}
}




})()