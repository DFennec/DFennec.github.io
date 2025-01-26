import { Component } from '@angular/core';
import { ProjectFrameComponent } from '../project-frame#TODO PROJECT SERIALIZATION/project-frame.component';
import { TechGalleryComponentFront } from '../tech-gallery-front/tech-gallery.component';
import { TechGalleryComponentBack } from '../tech-gallery-back/tech-gallery.component';
import { TechGalleryComponentOthers } from '../tech-gallery-others/tech-gallery.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectFrameComponent,TechGalleryComponentFront,TechGalleryComponentBack,TechGalleryComponentOthers],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
