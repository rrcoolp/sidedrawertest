import {Component,OnInit} from "@angular/core";

@Component({
  selector: "testpage",
  templateUrl: "pages/pagenotfound/pagenotfound.html"
})


//var viewModel = new mainViewModelModule.MainViewModel();
export class PageNotFound implements OnInit {
  //@ViewChild("scrollView") scrollView2: ElementRef;

  constructor() {

  }
  ngOnInit() {
	  console.log("Page not Found NG INIT");	  
  }  
}