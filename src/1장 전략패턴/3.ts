// 문제: 고무 오리도 날아다닌다.

// 대응: RubberDuck 클래스에 fly 메서드를 오버라이드 한다.

class Duck3 {
  quack() {}
  swim() {}
  display() {}
  fly() {}
}

class MallarDuck3 extends Duck3 {
  display() {}
}

class RubberDuck3 extends Duck3 {
  fly() {
    // 아무것도 하지 않는다.
  }
}