import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var jQuery:any; 

@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.css']
})
export class DevicelistComponent implements OnInit,AfterViewInit {
  isUpdate:boolean=false;
  isiUpdate:boolean=false;
  ibutton="add";
  button="add";
  device:any={};
  interface:any={};
  interfaceList:any=[]
  loopError="";
  hostError="";
  ipError="";
  interfaceError="";
  current={};
  icurrent={};
  deviceList=[
  {hostname:"www.infiniylabs.com",loopback:"192.168.1.1",
  interfaces:[{interface:"LookBack100",ip:"192.168.0.1"},
  {interface:"LoopBack101",ip:"192.168.0.2"}

]},
  {hostname:"www.mightycoder.com",loopback:"192.168.1.2",interfaces:[]}

];

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("devicelist")){
      this.deviceList=JSON.parse(localStorage.getItem("devicelist"));
    }
   
  }
  ngAfterViewInit(){

  }
  addevice(){
    this.hostError="";
    this.loopError="";
    console.log(this.device);
    let oldDeviceList=[];
    if(this.isUpdate){
        oldDeviceList=JSON.parse(localStorage.getItem("devicelist"));
        //this.updateValidation(this.ho)

    }else{
      oldDeviceList=this.deviceList;
    }
    if(this.device.hostname){
      if( this.checkhostnameUnique(this.device.hostname,"hostname",this.deviceList,this.current)){
     
    if(this.ipValidation(this.device.loopback)){
      if( this.checkhostnameUnique(this.device.loopback,"loopback",this.deviceList,this.current)){
    if(this.isUpdate){
      this.isUpdate=false;
      this.button="add";
    }else{
      this.device.interfaces=[];
      this.deviceList.push(this.device);
    }
    this.saveLocalstorage();
    console.log(this.device);
    
    this.device={};
    this.icurrent={};
    
  }else{
    this.loopError="Ip is  already  in use";
  }
}else{
    this.loopError="Enter valid IP";
  }
}else{
  this.hostError="Host name Already in use"
}
}
else{
  this.hostError="Host name should not be empty"
}
  }
  deviceEdit(device:any){
    this.isUpdate=true;
    this.button="edit";
    this.device=device;
    this.current=device;
console.log(device);
  }
  delete(device:any){
    const index: number = this.deviceList.indexOf(device);
    if (index !== -1) {
        this.deviceList.splice(index, 1);

    } 
    this.saveLocalstorage();

  }
  viewInterface(device:any){
    //this.device=device;
    this.interfaceList=device.interfaces;
    console.log(this.interfaceList);
  }
  addeviceinterfce(device:any){
   // this.isiUpdate=false;
   // this.ibutton="add";
    console.log(device);
    this.ipError="";
    this.interfaceError="";
    if(device.interface){
      if( this.checkhostnameUnique(device.interface,"interface",this.interfaceList,this.icurrent)){
      
      if(this.ipValidation(device.ip)){
        if( this.checkhostnameUnique(device.ip,"ip",this.interfaceList,this.icurrent)){
        if(this.isiUpdate){
           this.isiUpdate=false;
           this.ibutton="add";
        }
        else{
          this.interfaceList.push(device);
        }
    this.interface={};
    this.current={};
      }else{
        this.ipError="Ip should be valid";
      }}
      else{
        this.ipError="Enter valid IP";
      }
    }else{
      this.interfaceError="Interface should be unique"
    }
  }
    else{
      this.interfaceError="Enter valid interface"
    }
    this.saveLocalstorage();
   // this.device.interfaces.push(this.interface);
   // this.interfaceList=this.device.interfces;
  }
  editinterface(device:any){
  this.interface=device;
  this.icurrent=device;
  this.isiUpdate=true;
  this.ibutton="edit";
  this.saveLocalstorage();
  }
  deleteinterface(device:any){
    const index: number = this.interfaceList.indexOf(device);
    if (index !== -1) {
        this.interfaceList.splice(index, 1);

    } 
    this.saveLocalstorage();

  }
  ipValidation(ip){
   

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip))  
    {  
      return (true)  
    }  
 
  return (false)  
  }
  saveLocalstorage(){
    localStorage.setItem("devicelist",JSON.stringify(this.deviceList));
  }

  checkhostnameUnique(hostname,type,list,current){
    let deviceList=[];
   let isExit=true;
     //deviceList=JSON.parse((localStorage.getItem("devicelist")));
     list.forEach(element => {
       console.log(element);
       if(element!=current){
       if(element[type]===hostname){
          isExit=false;
        
       }
      }
     });
     
   return isExit;
    
  }

  updateValidation(hostname,type,list,current){
    let deviceList=[];
   let isExit=true;
     //deviceList=JSON.parse((localStorage.getItem("devicelist")));
     list.forEach(element => {

       console.log(element);
       if(element!=current){
       if(element[type]===hostname){
          isExit=false;
       }
       }
     });
     
   return isExit;
    
  }
  
}
