import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { InterfaceInputComponent } from './interface-input/interface-input.component';
import { DevicelistComponent } from './devicelist/devicelist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDeviceComponent,
    InterfaceInputComponent,
    DevicelistComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
