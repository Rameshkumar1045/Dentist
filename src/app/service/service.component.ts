import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  tooth=[{
    image:"assets/toothcare/tooth.png",
    title:"Tooth Protection",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth1.png",
    title:"Dental Implants",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth2.png",
    title:"Dental Care",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth3.png",
    title:"Teeth Whitening",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth4.png",
    title:"Dental Caculus",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth5.png",
    title:"Tooth Removal",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth4.png",
    title:"Removal of Tartar",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    image:"assets/toothcare/tooth6.png",
    title:"Tooth Inspection",
    contant:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  }

]

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
