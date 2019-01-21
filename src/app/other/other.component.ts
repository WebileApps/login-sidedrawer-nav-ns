import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'other',
    moduleId: module.id,
    templateUrl : './other.component.html'
})
export class OtherComponent {

    constructor(private routerExtensions: RouterExtensions) {}
    
    onLoginButtonTapped() {
        this.routerExtensions.navigate(['item','default']);
    }

    onWelcomeTapped() {
        this.routerExtensions.navigate(['welcome']);
    }
}