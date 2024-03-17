// 문제: 코드 중복을 피하지 못한다.

// * 상속을 사용하면: 일부 서브클래스에만 필요한 기능을 처리하기 힘들다.
// * 인터페이스를 사용하면: 코드 중복이 발생한다.

// 대응: FlyBehavior, QuackBehavior를 인터페이스로 분리하고, Duck 클래스에 주입한다.

interface FlyBehavior7 {
  fly(): void;
}

class FlyWithWings implements FlyBehavior7 {
  fly() {}
}

class FlyNoWay implements FlyBehavior7 {
  fly() {}
}

interface QuackBehavior7 {
  quack(): void;
}

class Quack implements QuackBehavior7 {
  quack() {}
}

class Squeak implements QuackBehavior7 {
  quack() {}
}

class MuteQuack implements QuackBehavior7 {
  quack() {}
}


abstract class Duck6 {
  flyBehavior: FlyBehavior7;

  quackBehavior: QuackBehavior7;
  
  swim() {}
  display() {}

  // ? 책에서는 performQuack으로 되어있는데 왜 네이밍을 바꿔서 이렇게 했을까?
  quack() { 
    this.quackBehavior.quack();
  }
  fly() {
    this.flyBehavior.fly();
  }
}

class RedheadDuck6 extends Duck6 {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {}
}

class MallardDuck6 extends Duck6 {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }
  display() {}
}

class RubberDuck6 extends Duck6 {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }
}

class DecoyDuck6 extends Duck6 {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }
}