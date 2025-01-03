import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-frame',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-frame.component.html',
  styleUrl: './project-frame.component.css'
})
export class ProjectFrameComponent {

  featuredProjects=[
    {
      name: 'Project 1',
      subtitle: 'Subtitle 1',
      description: 'Description 1',
      image: 'https://images.squarespace-cdn.com/content/v1/5943b11db3db2be040e6fa54/1526228388073-OV5CW9SOJULLH9F8ZLXM/Image-coding.jpg?format=1500w'
    },
    {
      name: 'Project 2',
      subtitle: 'Subtitle 2',
      description: 'Description 2',
      image: 'https://images.squarespace-cdn.com/content/v1/5943b11db3db2be040e6fa54/1526228388073-OV5CW9SOJULLH9F8ZLXM/Image-coding.jpg?format=1500w'
    },
    {
      name: 'Project 3',
      subtitle: 'Subtitle 3',
      description: 'Description 3',
      image: 'https://images.squarespace-cdn.com/content/v1/5943b11db3db2be040e6fa54/1526228388073-OV5CW9SOJULLH9F8ZLXM/Image-coding.jpg?format=1500w'
    },
    {
      name: 'Project 4',
      subtitle: 'Subtitle 4',
      description: 'Description 4',
      image: 'https://images.squarespace-cdn.com/content/v1/5943b11db3db2be040e6fa54/1526228388073-OV5CW9SOJULLH9F8ZLXM/Image-coding.jpg?format=1500w'
    }
  ]
  loadFeatured(){
    // TODO: featuredProjects=
  }
}
