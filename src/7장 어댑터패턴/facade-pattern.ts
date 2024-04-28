// example of facade pattern

class Light {
	on() {
		console.log('light on');
	}

	off() {
		console.log('light off');
	}
}

class Stereo {
	on() {
		console.log('stereo on');
	}

	off() {
		console.log('stereo off');
	}

	setCD() {
		console.log('stereo setCD');
	}

	setVolume(volume: number) {
		console.log(`stereo volume set to ${volume}`);
	}
}

class TV {
	on() {
		console.log('TV on');
	}

	off() {
		console.log('TV off');
	}
}

class HomeTheaterFacade {
	light: Light;
	stereo: Stereo;
	tv: TV;

	constructor(light: Light, stereo: Stereo, tv: TV) {
		this.light = light;
		this.stereo = stereo;
		this.tv = tv;
	}

	watchMovie() {
		this.light.off();
		this.stereo.on();
		this.stereo.setCD();
		this.stereo.setVolume(11);
		this.tv.on();
	}

	endMovie() {
		this.light.on();
		this.stereo.off();
		this.tv.off();
	}
}