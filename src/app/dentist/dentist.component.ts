import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dentist',
  templateUrl: './dentist.component.html',
  styleUrls: ['./dentist.component.css']
})
export class DentistComponent {


  doc=[
    {
    image:"assets/doctor/doc-1.jpg.webp",
    name:"Dr. Lloyd Wilson",
    tittle:"HEAD DENTIST",
    content:"I am an ambitious workaholic, but apart from that, pretty simple person."
  },
{
    image:"assets/doctor/doc-2.jpg.webp",
    name:"Dr. Rachel Parker",
    tittle:"DENTIST",
    content:"I am an ambitious workaholic, but apart from that, pretty simple person."
},
{
    image:"assets/doctor/doc-3.jpg.webp",
    name:"Dr. Ian Smith",
    tittle:"DENTIST",
    content:"I am an ambitious workaholic, but apart from that, pretty simple person."
},
{
    image:"assets/doctor/doc-4.jpg.webp",
    name:"Dr. Alicia Henderson",
    tittle:"DENTIST",
    content:"I am an ambitious workaholic, but apart from that, pretty simple person."
}
]

constructor(private route:Router){}


}
