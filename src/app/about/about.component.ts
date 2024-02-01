import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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
