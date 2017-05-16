import { Component, OnDestroy, OnInit} from "@angular/core";

import * as accelerometer from 'nativescript-accelerometer';

@Component({
	selector: "ns-text-test",
	moduleId: module.id,
	styleUrls: ['./text-test.component.css'],
	templateUrl: "./text-test.component.html",
})
export class TextTestComponent implements OnInit, OnDestroy {
	private x: number = 0;
	private y: number = 0;
	private z: number = 0;

	constructor() {
	}

	ngOnInit(): void {
		this.accelerate();
	}

	ngOnDestroy() {
		accelerometer.stopAccelerometerUpdates();
	}

	private accelerate(): void {
		accelerometer.startAccelerometerUpdates((data) => {
			let deltaX = Math.abs(this.x - data.x);
			let deltaY = Math.abs(this.y - data.y);
			let deltaZ = Math.abs(this.z - data.z);

			if (Math.max(deltaX, deltaY, deltaZ) >= .05) {
					console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
					this.x = this.round(data.x, 4);
					this.y = this.round(data.y, 4);
					this.z = this.round(data.z, 4);
			}
		})
	}

	private round(value, precision) {
		var multiplier = Math.pow(10, precision || 0);
		return Math.round(value * multiplier) / multiplier;
	}

	private isValidTilt(val): boolean {
		return Math.abs(val) <= .05;
	}

	private isValidOrientation(): boolean {
		return this.isValidTilt(this.x) && this.isValidTilt(this.y) && +this.z <= -.5;
	}
}
