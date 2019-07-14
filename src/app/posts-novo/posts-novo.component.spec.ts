import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsNovoComponent } from './posts-novo.component';

describe('PostsNovoComponent', () => {
  let component: PostsNovoComponent;
  let fixture: ComponentFixture<PostsNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
