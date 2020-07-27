import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PartyConditionsComponent} from "./party-conditions/party-conditions.component";
import { PascalCaseToSpacePipe } from './pipes/pascal-case-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PartyConditionsComponent,
    PascalCaseToSpacePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
