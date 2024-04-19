

/**  리모컨
- 리모컨에 슬롯이 있고, 슬롯에 해당하는 on / off 버튼이 존재.
- undo 버튼
- 각 슬롯을 기기에 할당하고 조절할 수 있도록 구현.
- 각 기기의 클래스에는 공통적인 인터페이스는 없음.
**/

(()  => {
	interface Command {
		execute(): void;
	}
	
	class Light {
		on() {
			console.log('Light is on');
		}
		off() {
			console.log('Light is off');
		}
	}
	
	
	class LightOnCommand implements Command {
		light: Light;
	
		constructor(light: Light) {
			this.light = light;
		}
		
		execute() {
			this.light.on();
		}
	}
	
	class SimpleRemoteControl {
		slot: Command;
	
		setCommand(command: Command) {
			this.slot = command;
		}
	
		buttonWasPressed() {
			this.slot.execute();
		}
	}
})()
