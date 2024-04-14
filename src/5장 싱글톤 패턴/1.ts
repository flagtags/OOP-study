// 고전적인 싱글턴 패턴

(() => {



class Singleton {
	// 싱글톤 인스턴스를 저장할 정적 프로퍼티
	private static instance: Singleton;

	// 생성자를 private으로 선언하여 외부에서 인스턴스를 생성하는 것을 막음
	private constructor() {}


	public static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}
}




})()