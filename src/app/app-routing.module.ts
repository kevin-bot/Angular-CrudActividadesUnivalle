import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateActivityComponent} from './componet/activity-administration/create-activity/create-activity.component';
import {Error404Component} from './componet/error404/error404.component';
const routes: Routes = [
  { path: '', component: CreateActivityComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
