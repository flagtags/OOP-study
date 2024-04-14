// 초콜릿 보일러

// 초콜릿 보일러 인스턴스가 두개 생긴다면?

(() => {



class ChocolateBoiler {
	private empty: boolean;
	private boiled: boolean;

	private constructor() {
		this.empty = true;
		this.boiled = false;
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