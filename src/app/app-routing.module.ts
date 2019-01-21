import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { OtherComponent } from "./other/other.component";

const routes: Routes= [
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "login", component: OtherComponent },
    { path: "welcome", component: OtherComponent },
    { path: "item", loadChildren: "~/app/item/items.module#ItemsModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    declarations: [OtherComponent],
    exports: [
        NativeScriptRouterModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppRoutingModule { }