import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateActivityComponent } from './componet/activity-administration/create-activity/create-activity.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './componet/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,    CreateActivityComponent, Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
