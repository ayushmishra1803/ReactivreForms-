import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserFromComponent } from './user-from/user-from.component';
import { SimplefromComponent } from './simplefrom/simplefrom.component';
import { ExplanationComponent } from './explanation/explanation.component'
@NgModule({
  declarations: [
    AppComponent,
    UserFromComponent,
    SimplefromComponent,
    ExplanationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
