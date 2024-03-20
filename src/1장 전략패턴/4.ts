// 문제: 나무 오리 추가

// 대응: DecoyDuck 클래스 추가. quack 메서드를 오버라이드 한다.

class Duck4 {
  quack() {}
  swim() {}
  display() {}
  fly() {}
}

class MallarDuck4 extends Duck4 {
  display() {}
}

class RubberDuck4 extends Duck4 {
  fly() {
    // 아무것도 하지 않는다.
  }
}

class DecoyDuck4 extends Duck4 {
  quack() {
    // 아무것도 하지 않는다.
  }

  fly() {
    // 아무것도 하지 않는다.
  }
}