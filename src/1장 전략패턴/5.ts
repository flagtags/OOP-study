// 문제: 앞으로 규격이 바뀔 때마다 Duck 서브클래스의 fly와 quack 메서드를 오버라이드 해야 한다.
// 이게 왜 문제가 되나 싶었는데, 
// * 서브 클래스의 기능을 보려면 서브 클래스와 슈퍼 클래스를 함께 봐야 되는게 문제가 아닐까?
// * 오리 인터페이스만 보고 날 수 있는지 없는지를 판단할 수 없다. 책임질 수 없는 메세지를 받는다. (이게 진짜 문제인듯)

// 대응: Flyable, Quackable 인터페이스를 만들어서 각자 책임질 수 있는 것만 구현하게 한다.

interface Flyable5 {
  fly(): void;
}

interface Quackable5 {
  quack(): void;
}

class Duck5 {
  quack() {}
  swim() {}
  display() {}
  fly() {}
}


class RedheadDuck5 extends Duck5 implements Flyable5, Quackable5 {
  display() {}
  fly() {}
  quack() {}
}

class MallarDuck5 extends Duck5 implements Flyable5, Quackable5 {
  display() {}
  fly() {}
  quack() {}
}

class RubberDuck5 extends Duck5 implements Quackable5 {
  quack() {}
}

class DecoyDuck5 extends Duck5 {
  
}