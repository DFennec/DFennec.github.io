import { Component, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToSection(tagName : string): void {
    const section = document.getElementById(tagName);
    if (section) {
      HomeComponent.scrollToSection(tagName);
    }
  }
}