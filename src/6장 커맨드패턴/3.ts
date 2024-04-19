

/**  리모컨
- 리모컨에 슬롯이 있고, 슬롯에 해당하는 on / off 버튼이 존재.
- undo 버튼
- 각 슬롯을 기기에 할당하고 조절할 수 있도록 구현.
- 각 기기의 클래스에는 공통적인 인터페이스는 없음.
**/

(()  => {
	interface Command {
		execute(): void;
		undo(): void;
	}
	
	class Light {
		on() {
			console.log('Light is on');
		}
		off() {
			console.log('Light is off');
		}
	}

	class Stereo {
		on() {
			console.log('Stereo is on');
		}

		off() {
			console.log('Stereo is off');
		}

		setCD() {
			console.log('Stereo is set for CD input');
		}

		setVolume(volume: number) {
			console.log(`Stereo volume set to ${volume}`);
		}
	}
	
	class NoCommand implements Command {
		execute() {}
		undo(): void {}
	}
	
	class LightOnCommand implements Command {
		light: Light;
	
		constructor(light: Light) {
			this.light = light;
		}
		
		execute() {
			this.light.on();
		}

		undo() {
			this.light.off();
		}
	}

	class LightOffCommand implements Command {
		light: Light;
	
		constructor(light: Light) {
			this.light = light;
		}
		
		execute() {
			this.light.off();
		}

		undo(): void {
			this.light.on();
		}
	}

	class StereoOnWithCDCommand implements Command {
		stereo: Stereo;

		constructor(stereo: Stereo) {
			this.stereo = stereo;
		}

		execute() {
			this.stereo.on();
			this.stereo.setCD();
			this.stereo.setVolume(11);
		}

		undo(): void {
			this.stereo.setVolume(0);
			this.stereo.off();
		}
	}
	
	class RemoteControl {
		onCommands: Command[];
		offCommands: Command[];
		undoCommand: Command;
		slotNumer: number

		constructor() {
			// null 체크를 하고싶지 않아서 NoCommand를 사용.
			const noCommand = new NoCommand();
			this.slotNumer = 7;
			this.onCommands = Array.from({ length: this.slotNumer }, () => noCommand);
			this.offCommands = Array.from({ length: this.slotNumer }, () => noCommand);
		}

		setCommand(slot: number, onCommand: Command, offCommand: Command) {
			this.onCommands[slot] = onCommand;
			this.offCommands[slot] = offCommand;
		}

		onButtonWasPushed(slot: number) {
			this.onCommands[slot].execute();
			this.undoCommand = this.onCommands[slot];
		}

		offButtonWasPushed(slot: number) {
			this.offCommands[slot].execute();
			this.undoCommand = this.offCommands[slot]
		}

		undoButtonWasPushed() {
			this.undoCommand.undo();
		}


		toString() {
			return Array.from({ length: this.slotNumer }, (_, index: number) => {
				return `slot[${index}] ${this.onCommands[index].constructor.name} ${this.offCommands[index].constructor.name}`
			}).join('\n');


		}
	}
})()
