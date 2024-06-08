import { Component, OnInit } from '@angular/core';

import { IPost } from '../../../core/interfaces';
import { PostService } from '../../../core/post.service';

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
