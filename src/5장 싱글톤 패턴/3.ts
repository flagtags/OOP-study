// 초콜릿 보일러

// 초콜릿 보일러 인스턴스가 두개 생긴다면?
// 두 개의 인스턴스가 하나의 기계를 제어하려고 할 때 문제가 발생할 수 있다.

// 초콜릿 보일러를 싱글턴으로

(() => {



class ChocolateBoiler {
	private empty: boolean;
	private boiled: boolean;

	private static instance: ChocolateBoiler;

	private constructor() {
		this.empty = true;
		this.boiled = false;
	}

	public static getInstance() {
		if (!ChocolateBoiler.instance) {
			ChocolateBoiler.instance = new ChocolateBoiler();
		}

		return ChocolateBoiler.instance;
	}

	public isEmpty() {
		return this.empty;
	}

	public isBoiled() {
		return this.boiled;
	}

	public fill() {
		if (this.isEmpty()) {
			this.empty = false;
			this.boiled = false;
			// 보일러에 우유/초콜릿 혼합재료를 집어넣음
		}
	}

	public drain() {
		if (!this.isEmpty() && this.isBoiled()) {
			// 혼합재료를 다 끓여서 재료를 다음 단계로 넘김
			this.empty = true;
		}
	}

	public boil() {
		if (!this.isEmpty() && !this.isBoiled()) {
			// 혼합재료를 끓임
			this.boiled = true;
		}
	}
}




})()