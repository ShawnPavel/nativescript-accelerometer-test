import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { BubbleTestComponent } from './bubble-test/bubble-test.component';
import { BubbleTestVerticalComponent } from './bubble-test-vertical/bubble-test-vertical.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextTestComponent } from './text-test/text-test.component';

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "bubble-test", component: BubbleTestComponent },
    { path: "bubble-test-vertical", component: BubbleTestVerticalComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "text-test", component: TextTestComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }