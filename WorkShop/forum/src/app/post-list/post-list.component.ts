import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getRecentPosts$().subscribe(posts => {
      this.posts = posts;
    });
  }
}
