import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-gallery-front',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-gallery.component.html',
  styleUrl: './tech-gallery.component.css'
})
export class TechGalleryComponentFront {
  idx = 0;
  techs = [
  { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png' }, 
  { name: 'CSS', img: 'https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png' }, 
  { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
  { name: 'Tailwind', img: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png' },
  { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' },
  { name: 'Angular', img: 'https://www.angularacademy.ca/Assets/img/angular@2x.png' }
 ];

  previousTech(){
    this.idx = (this.idx > 0) ? this.idx - 1 : this.techs.length - 1;
  }
  nextTech(){
    this.idx = (this.idx < this.techs.length - 1) ? this.idx + 1 : 0;
  }
}
