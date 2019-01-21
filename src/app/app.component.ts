import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { filter, tap } from "rxjs/operators";
import { enable, setCategories, categories } from "tns-core-modules/trace";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    private _activatedUrl: string;

    constructor(private router: Router) {
        setCategories("ns-router,ns-route-reuse-strategy");
        // enable();
        this.router.events
        .pipe(
            // filter((event: any) => event instanceof NavigationEnd)
            tap(event => console.log(event))
        )
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }
}
