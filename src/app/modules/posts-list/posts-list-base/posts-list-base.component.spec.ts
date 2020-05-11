import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListBaseComponent } from './posts-list-base.component';

describe('PostsListBaseComponent', () => {
  let component: PostsListBaseComponent;
  let fixture: ComponentFixture<PostsListBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
