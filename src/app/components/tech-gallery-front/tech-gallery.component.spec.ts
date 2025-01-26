import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';


import { TechGalleryComponent } from './tech-gallery.component';

describe('TechGalleryComponent', () => {
  let component: TechGalleryComponent;
  let fixture: ComponentFixture<TechGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
