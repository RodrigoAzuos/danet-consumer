import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeletarComponent } from './post-deletar.component';

describe('PostDeletarComponent', () => {
  let component: PostDeletarComponent;
  let fixture: ComponentFixture<PostDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
