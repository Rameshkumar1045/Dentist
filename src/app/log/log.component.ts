import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {


  constructor(private route:Router){}
  goCantact(){
    return this.route.navigate(['contact']);
  }
  log(){
    return this.route.navigate(['log']);
  }
  pricing(){
    return this.route.navigate(['pricing'])
  }
  service(){
    return this.route.navigate(['service'])
  }
  about(){
    return this.route.navigate(['about'])
  }
  dentist(){
    return this.route.navigate(['dentist'])
  }
}
