import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";
import { ItemsRootComponent } from "./items.root.component";

const routes: Routes = [
    { path: "default", component: ItemsRootComponent, children: [
        { path: "list", outlet: "items", component: ItemsComponent, pathMatch: "full"},
        { path: "detail/:id", outlet: "items", component: ItemDetailComponent }
    ]}
];

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)],
    declarations: [
        ItemsComponent,
        ItemDetailComponent,
        ItemsRootComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule { }