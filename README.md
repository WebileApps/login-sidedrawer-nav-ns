# Introduction

This is a Angular based NativeScript project that demonstrates the use of Page Router Outlet(PRO) to have side drawer show up at an inner level of navigation.

**This requires NativeScript Angular plugin version greater than or equal to 7.1.**

The idea is to use a named PRO for side drawer main content.
```xml
<!-- items-root.component.html -->
<RadSideDrawer [drawerTransition]="sideDrawerTransition">
    <GridLayout tkDrawerContent rows="auto, *" class="sidedrawer sidedrawer-left">
    </GridLayout>
    <page-router-outlet tkMainContent class="page page-content" name="items"></page-router-outlet>
</RadSideDrawer>
```
```typescript
const routes: Routes = [
    { path: "default", component: ItemsRootComponent, children: [
        { path: "list", outlet: "items", component: ItemsComponent, pathMatch: "full"},
        { path: "detail/:id", outlet: "items", component: ItemDetailComponent }
    ]}
];
```

We need a `default` as the initial path for navigation to work correctly in iOS.

```typescript
export class ItemsRootComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, 
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.routerExtensions.navigate(
            [{ outlets: { "items": [ "list"] } }], 
            { relativeTo: this.activatedRoute}
        );
    }
}
```
We will have to manually navigate inside the named PRO in on init for the first navigation to show up when the side drawer is displayed.

## Observations

* In Android, it was observed that a named PRO was not necessary but iOS definitely needs a named PRO.
* We will have to deal with double Action bars as we have nested PROs. This example supresses the top level action bar by setting `actionBarVisibility` to `never`.
```xml
<!-- app.component.html -->
<page-router-outlet actionBarVisibility="never"></page-router-outlet>
```
* Although not explored here, we can lazily load components inside the named PRO. It requires you to use `NSEmptyOutletComponent` like a example [here](https://www.nativescript.org/blog/implementing-a-login-for-nativescript-apps-with-tab-based-navigation) which demonstrates tab drawer navigation after login.
```typescript
import { NSEmptyOutletComponent } from "nativescript-angular/router";

...

{
   path: "default", component: ItemsRootComponent, children: [
       {
           path: "items",outlet: "items",
           component: NSEmptyOutletComponent,
           loadChildren: "~/app/something/some.module#SomeModule",
       },
``` 