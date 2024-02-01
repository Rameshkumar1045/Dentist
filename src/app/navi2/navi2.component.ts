import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi2',
  templateUrl: './navi2.component.html',
  styleUrls: ['./navi2.component.css']
})
export class Navi2Component {

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
