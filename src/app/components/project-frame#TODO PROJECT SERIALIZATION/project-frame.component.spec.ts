import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFrameComponent } from './project-frame.component';

describe('ProjectFrameComponent', () => {
  let component: ProjectFrameComponent;
  let fixture: ComponentFixture<ProjectFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
