import {Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef} from "@angular/core";
//import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {Router, Routes, ActivatedRoute} from '@angular/router';
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import {Location, LocationStrategy} from "@angular/common";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import * as application from "application";
import {TextField} from "ui/text-field";
import {SwissArmyKnife} from 'nativescript-swiss-army-knife/nativescript-swiss-army-knife';


@Component({
	selector: "main",
	templateUrl: "masterpage.html"
})
export class AppComponent implements OnInit {
	showBackButton: boolean = false;
	history: any = [];
	pushState: any;
	BackButtonOverRide: any;
	@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
	@ViewChild("txtSearch") txtSearch: ElementRef;
	private drawer: SideDrawerType;
	activityIndicator = true;
	firstLoad = false;
	searchValue = "";
	PageActivityIndicator: boolean = false;
	PageActivityIndicatorDebounce: boolean = false;

	constructor(public _router: Router, private _changeDetectionRef: ChangeDetectorRef, private _Location: Location, private _LocationStrategy: LocationStrategy) {
		this._changeDetectionRef = _changeDetectionRef;
		this._LocationStrategy = _LocationStrategy;
	}

	getString(charcode) { 
		//return "text";
		return String.fromCharCode(charcode);
	}

	ngAfterViewInit() {
        //this.drawer = this.drawerComponent.sideDrawer;
        //this._changeDetectionRef.detectChanges();
    }

	ngOnInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        //this._changeDetectionRef.detectChanges();

		let that = this;

		let gobackCallback = function (args) {
			that.goBack();
			if (args) {
				args.cancel = true;
			}
		};

		if (application.android) {
			application.android.on(application.AndroidApplication.activityBackPressedEvent, gobackCallback);
		}

		//this._app_globals.javascript_resources


	}

	ClearSearch() {
		this.searchValue = "";
	}

	Search() {
		console.log("CHANGE:" + this.searchValue);
	}


	gotoHomepage() {
		console.log("Tap Logo");
		this.drawer.closeDrawer();
	}

	isPathHome(path) {
		return (path==="/" || path==="/home")		
	}

	goBack(args?, arg2?) {

	}
	toggleDrawerState(args) {
		console.log("Tap Drawer");
		this.drawer.toggleDrawerState();
	}

	menuToggle(state: boolean) {
		state ? this.drawer.showDrawer() : this.drawer.closeDrawer();
	}

	public setGoBackButton = () => {
		console.log("PATH IS:" + this._LocationStrategy.path());
		this.showBackButton = true;
		this._changeDetectionRef.detectChanges();
	}
	navigateBasket() {
		console.log("Tap Basket");
		this.drawer.closeDrawer();
	}

	navigateTo(val) {
		this.menuToggle(false);
	}

	getLoginLabel() {
		return 'Login';
	}
	commongLoginLogout() {
	}
	CustomerName() {
		return "Welcome user";
	}

	Logout() {

	}

	showLogin() {
		console.log("Tap Login");
		this.drawer.closeDrawer();
	}

}