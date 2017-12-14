import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { InterfaceInputComponent } from './interface-input/interface-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDeviceComponent,
    InterfaceInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
