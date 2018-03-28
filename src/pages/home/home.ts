import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	magneticHeading: any;
	constructor(public navCtrl: NavController, deviceOrientation: DeviceOrientation,private platform: Platform) {
		this.magneticHeading = 0;

		this.platform.ready().then(() => {
			deviceOrientation.getCurrentHeading().then(
				(data1: DeviceOrientationCompassHeading) => this.magneticHeading=data1.magneticHeading,
				(error: any) => console.log(error+" #Error in getCurrentHeading")
			);
			
			const options={frequency:100};
			const subscription = deviceOrientation.watchHeading(options).subscribe(
				(data3: DeviceOrientationCompassHeading) => {
					this.magneticHeading=data3.magneticHeading;
					document.getElementById('image').style.transform = 'rotate(' + this.magneticHeading + 'deg)';},
				(error: any) => console.log(error+" #Error in watchHeading subscription")
			);
		});
	}
}
