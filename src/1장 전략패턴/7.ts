// 문제: 동적으로 행동을 변경하고 싶다.

// 대응: setter를 통해 행동을 변경할 수 있도록 한다.

interface FlyBehavior7 {
  fly(): void;
}

class FlyWithWings7 implements FlyBehavior7 {
  fly() {}
}

class FlyNoWay7 implements FlyBehavior7 {
  fly() {}
}

interface QuackBehavior7 {
  quack(): void;
}

class Quack7 implements QuackBehavior7 {
  quack() {}
}

class Squeak7 implements QuackBehavior7 {
  quack() {}
}

class MuteQuack7 implements QuackBehavior7 {
  quack() {}
}


abstract class Duck7 {
  flyBehavior: FlyBehavior7;

  quackBehavior: QuackBehavior7;
  
  swim() {}
  display() {}

  setFlyBehavior(fb: FlyBehavior7) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior7) {
    this.quackBehavior = qb;
  }

  // ? 책에서는 performQuack으로 되어있는데 왜 네이밍을 바꿔서 이렇게 했을까?
  quack() { 
    this.quackBehavior.quack();
  }
  fly() {
    this.flyBehavior.fly();
  }
}

class RedheadDuck7 extends Duck7 {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {}
}

class MallardDuck7 extends Duck7 {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }
  display() {}
}

class RubberDuck7 extends Duck7 {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }
}

class DecoyDuck7 extends Duck7 {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }
}

function main() {
  const mallard = new MallardDuck7();
  mallard.setFlyBehavior(new FlyWithWings());
  mallard.setQuackBehavior(new Quack());
  mallard.fly();
  mallard.quack();
}