import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blog=[
    {
      image:"assets/blog/image_1.jpg.webp",
      tittle:"How to keep your teeth always in the best condition",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      image:"assets/blog/image_2.jpg.webp",
      tittle:"How to keep your teeth always in the best condition",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      image:"assets/blog/image_3.jpg.webp",
      tittle:"How to keep your teeth always in the best condition",
      content:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
  ]

}
