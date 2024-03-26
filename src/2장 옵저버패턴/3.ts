
(() => {


	// 구현 목표
	// * 새로운 기상 데이터가 들어올 때마다 measuremmentsChanged()가 호출됨.
	// * 새로운 측정값이 들어올 때마다 3가지 디스플레이 요소를 갱신해야 함.
	// * 확장성 고려.

	// ! 문제점
	// * 바뀔 수 있는 부분이 캡슐화가 되지 않았다.
	// * 인터페이스를 기반으로 되어있는 것이 아니라 구현을 기반으로 되어있다.
	// * 실행중에 디스플레이를 빼거나 더할 수 없다.

	interface Observer {
		// 측정치를 직접 전달하고 있음.
		// 이 부분이 변경될 가능성이 있는데 캡슐화가 안 되어있음.
		update(temperature: number, humidity: number, pressure: number): void
	}

	interface Subject {
		registerObserver(observer: Observer): void;
		removeObserver(observer: Object): void;
		notifyObservers(): void;
	}

	interface DisplayElement {
		display()
	}

	class CurrentConditionsDisplay implements Observer, DisplayElement {

		private temperature: number;
		private humidity: number;
		private pressure: number;

		private weatherData: WeatherData // 저장을 하는 이유는 나중에 옵저버에서 탈퇴할 때 써먹으려고.

		constructor(weathreData: WeatherData) {
			this.weatherData = weathreData;

			this.weatherData.registerObserver(this)
		}

		update(temperature: number, humidity: number, pressure: number) {
			this.temperature = temperature;
			this.humidity = humidity;
			this.pressure = pressure;

			this.display()
		}

		display() {
			console.log(`현재상태: 온도 ${this.temperature}, 습도 ${this.humidity}, 기압 ${this.pressure}`)
		}
	}



	class WeatherData implements Subject {
		private observers: Observer[];

		private temperature: number;
		private humidity: number;
		private pressure: number;

		getTemperature() {
			return this.temperature;
		}
	
		getHumidity() {
			return this.humidity
		}
	
		getPressure() {
			return this.pressure
		}

		registerObserver(observer: Observer): void {
			this.observers.push(observer)
		}

		removeObserver(observer: Object): void {
			this.observers = this.observers.filter(o => o === observer);
		}

		notifyObservers(): void {
			this.observers.forEach((o) => {
				o.update(this.temperature, this.humidity, this.pressure)
			})
		}
	
		// 기상 관측값이 갱신될 때마다 호출되는 함수
		measurementsChanged() {	
			this.notifyObservers();
		}

		setMeasureMents(temperature: number, humidity: number, pressure: number) {
			this.temperature = temperature;
			this.humidity = humidity;
			this.pressure = pressure;
			this.measurementsChanged();
		}
	}



	const weatherData = new WeatherData();
	const currentDisplay = new CurrentConditionsDisplay(weatherData);

	weatherData.setMeasureMents(1, 2, 3)






















})();