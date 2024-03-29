import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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
