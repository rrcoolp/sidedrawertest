import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import {SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";


//import {LISTVIEW_PROVIDERS} from "nativescript-telerik-ui/listview/angular";
import {registerElement} from "nativescript-angular/element-registry";


@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
        SIDEDRAWER_DIRECTIVES,
		...navigatableComponents,
	],
	providers: [
    ],	
	bootstrap: [
		AppComponent
	],
	entryComponents: []
})
export class AppModule { }
