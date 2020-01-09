import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { CreateActivityComponent } from './componet/activity-administration/create-activity/create-activity.component';
import { AupdateActivityComponent } from './componet/activity-administration/aupdate-activity/aupdate-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateActivityComponent,
    AupdateActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
