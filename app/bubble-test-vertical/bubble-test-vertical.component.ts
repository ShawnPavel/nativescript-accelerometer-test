import { Component, OnDestroy, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";
import { AbsoluteLayout } from 'ui/layouts/absolute-layout'

import * as accelerometer from 'nativescript-accelerometer';

@Component({
	selector: "ns-bubble-test-vertical",
	moduleId: module.id,
	styleUrls: ['./bubble-test-vertical.component.css'],
	templateUrl: "./bubble-test-vertical.component.html",
})
export class BubbleTestVerticalComponent implements OnInit, OnDestroy {
	@ViewChild('absLayout') public absLayout: ElementRef
	@ViewChild('bubble') public bubbleImage: ElementRef

	private x: number = 0;
	private y: number = 0;
	private z: number = 0;

	constructor(
		private zone: NgZone
	) {
	}

	ngOnInit(): void {
		this.accelerate();
	}

	ngOnDestroy() {
		accelerometer.stopAccelerometerUpdates();
	}

	private accelerate(): void {
		let me = this;
		accelerometer.startAccelerometerUpdates((data) => {
			me.zone.run(() => {
				let deltaX = Math.abs(me.x - data.x);
				let deltaY = Math.abs(me.y - data.y);
				let deltaZ = Math.abs(me.z - data.z);

				if (Math.max(deltaX, deltaY, deltaZ) >= .05) {

					console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
					me.x = me.round(data.x, 4);
					me.y = me.round(data.y, 4);
					me.z = me.round(data.z, 4);
					me.updateCircle();
				}
			});
		}, { sensorDelay: 'ui' });
	}

	private dotLeft = 0;
	private dotTop = 0;
	private updateCircle(): void {
		if (this.absLayout) {
			let layout: AbsoluteLayout = this.absLayout.nativeElement;
			let bubble = this.bubbleImage.nativeElement;

			let size = layout.getActualSize();
			let bubbleSize = bubble.getActualSize();
			this.zone.run(() => {
				this.dotLeft = (size.width / 2) + ((size.width / 2) * (+this.x * -1)) - (bubble.width / 2);
				this.dotTop = (size.height / 2) + ((size.height / 2) * +this.y) - (bubble.height / 2);
			});
		}
	}

	private round(value, precision) {
		var multiplier = Math.pow(10, precision || 0);
		return Math.round(value * multiplier) / multiplier;
	}

	private isValidXTilt(val): boolean {
		return Math.abs(val) <= .05;
	}

	private isValidYTilt(val): boolean {
		return Math.abs(val) >= .99;
	}

	private isValidZ(val): boolean {
	return Math.abs(this.z) <= .05;
	}

	private isValidOrientation(): boolean {
	return this.isValidXTilt(this.x) && this.isValidYTilt(this.y) && this.isValidZ(this.z);
	}
}
