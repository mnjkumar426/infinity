import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-interface-input',
  templateUrl: './interface-input.component.html',
  styleUrls: ['./interface-input.component.css']
})
export class InterfaceInputComponent implements OnInit {

  constructor() { }
@Input () device;
  ngOnInit() {
    console.log(this.device);
  }

}
