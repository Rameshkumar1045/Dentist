import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  
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
}
