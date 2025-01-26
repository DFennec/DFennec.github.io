import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-gallery-back',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-gallery.component.html',
  styleUrl: './tech-gallery.component.css'
})
export class TechGalleryComponentBack {
  idx = 0;
  techs = [
  { name: 'Java', img: 'https://static-00.iconduck.com/assets.00/java-icon-2048x2048-3pfathb3.png' }, 
  { name: 'Python', img: 'https://th.bing.com/th/id/R.7494e83354e2662240d06630cc31f08d?rik=9tIRLZpYS9oTfQ&pid=ImgRaw&r=0' }, 
  { name: 'Node.js', img: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256' },
  { name: 'C', img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { name: 'MySQL', img: 'https://cdn.freebiesupply.com/logos/large/2x/mysql-1-logo-black-and-white.png' },
  { name: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
  { name: 'MongoDB', img: 'https://static-00.iconduck.com/assets.00/mongodb-original-icon-921x2048-hvrb89lu.png' },
  { name: 'Spring Boot', img: 'https://img.icons8.com/?size=512&id=90519&format=png' },
  { name: 'Express.js', img: 'https://seekvectors.com/files/download/234b110fb32958f68f318e13c7a0610e.png' }
 ];

  previousTech(){
    this.idx = (this.idx > 0) ? this.idx - 1 : this.techs.length - 1;
  }
  nextTech(){
    this.idx = (this.idx < this.techs.length - 1) ? this.idx + 1 : 0;
  }
}
