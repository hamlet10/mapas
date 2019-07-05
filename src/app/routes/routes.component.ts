import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "path", component: FeatureComponent },
  { path: "**", component: PageNotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes);
