import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { BubbleTestComponent } from './bubble-test/bubble-test.component';
import { BubbleTestVerticalComponent } from './bubble-test-vertical/bubble-test-vertical.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextTestComponent } from './text-test/text-test.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BubbleTestComponent,
        BubbleTestVerticalComponent,
        DashboardComponent,
        TextTestComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
