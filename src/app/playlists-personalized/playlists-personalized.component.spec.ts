import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsPersonalizedComponent } from './playlists-personalized.component';

describe('PlaylistsPersonalizedComponent', () => {
  let component: PlaylistsPersonalizedComponent;
  let fixture: ComponentFixture<PlaylistsPersonalizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistsPersonalizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistsPersonalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
