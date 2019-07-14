import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetalheComponent } from './posts-detalhe.component';

describe('PostsDetalheComponent', () => {
  let component: PostsDetalheComponent;
  let fixture: ComponentFixture<PostsDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
