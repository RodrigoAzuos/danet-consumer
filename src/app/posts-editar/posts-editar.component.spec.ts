import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsEditarComponent } from './posts-editar.component';

describe('PostsEditarComponent', () => {
  let component: PostsEditarComponent;
  let fixture: ComponentFixture<PostsEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
