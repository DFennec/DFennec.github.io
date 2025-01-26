import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-gallery-others',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-gallery.component.html',
  styleUrl: './tech-gallery.component.css'
})
export class TechGalleryComponentOthers {
  idx = 0;
  techs = [
  { name: 'Git', img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
  { name: 'RESTfulAPIs', img: 'https://media.lordicon.com/icons/wired/outline/1330-rest-api.svg' },
  { name: 'npm', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png' },
  { name: 'JUnit 4', img: 'https://avatars.githubusercontent.com/u/874086?v=4' },
  { name: 'Scrum Methodologies', img: 'https://static-00.iconduck.com/assets.00/scrum-icon-2048x1586-y3fa1kw2.png' },
  { name: 'Bash', img: 'https://bashlogo.com/img/logo/png/full_colored_dark.png' },
  { name: 'Ubuntu', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png' },
  { name: 'Windows', img: 'https://www.freeiconspng.com/thumbs/windows-icon-png/cute-ball-windows-icon-png-16.png' },
  { name: 'Spanish', img: 'https://images.vexels.com/content/164599/preview/spain-flag-language-icon-circle-fd7b65.png' },
  { name: 'English', img: 'https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-england-flag-language-icon-circle.png' },
  { name: 'Japanese', img: 'https://images.vexels.com/content/164333/preview/japan-flag-language-icon-circle-74915c.png' }
 ];

  previousTech(){
    this.idx = (this.idx > 0) ? this.idx - 1 : this.techs.length - 1;
  }
  nextTech(){
    this.idx = (this.idx < this.techs.length - 1) ? this.idx + 1 : 0;
  }
}
