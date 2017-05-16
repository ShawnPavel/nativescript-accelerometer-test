import { Component} from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: "ns-dashboard",
	moduleId: module.id,
	styleUrls: ['./dashboard.component.css'],
	templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
	constructor( 
		private routerExtensions: RouterExtensions
	) {
	}

	private goToBubble(): void {
		this.routerExtensions.navigate(['/bubble-test'],
			{
				transition: {
					name: 'flip'
				},
				clearHistory: false
			});
	}	

	private goToText(): void {
		this.routerExtensions.navigate(['/text-test'],
			{
				transition: {
					name: 'flip'
				},
				clearHistory: false
			});
	}	
}
