import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowupComponent } from './showup/showup.component';
import {RootScopeService} from './rootScope.service.ts';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, ShowupComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RootScopeService]
})
export class AppModule { }
