
(() => {


	// 구현 목표
	// * 새로운 기상 데이터가 들어올 때마다 measuremmentsChanged()가 호출됨.
	// * 새로운 측정값이 들어올 때마다 3가지 디스플레이 요소를 갱신해야 함.
	// * 확장성 고려.

	// ! 문제점
	// * 바뀔 수 있는 부분이 캡슐화가 되지 않았다.
	// * 인터페이스를 기반으로 되어있는 것이 아니라 구현을 기반으로 되어있다.
	// * 실행중에 디스플레이를 빼거나 더할 수 없다.

	class Display {
		update(temerature: number, humidity: number, pressure: number) {

		}
	}

	// 일단 임시로 같은거로..
	const currentConditionDisplay = new Display();
	const statisticsDisplay = new Display();
	const forecastDisplay = new Display();



	class WeatherData {
		getTemperature() {
			return 0;
		}
	
		getHumidity() {
			return 0
		}
	
		getPressure() {
			return 0
		}
	
		// 기상 관측값이 갱신될 때마다 호출되는 함수
		measurementsChanged() {	
			const temperature = this.getTemperature();
			const humidity = this.getHumidity();
			const pressure = this.getPressure();

			currentConditionDisplay.update(temperature, humidity, pressure);
			statisticsDisplay.update(temperature, humidity, pressure);
			forecastDisplay.update(temperature, humidity, pressure);
		}
	}
























})();