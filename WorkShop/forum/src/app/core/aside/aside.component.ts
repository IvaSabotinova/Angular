import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../content.service';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRecentPosts$().subscribe(result => {
      this.posts = result;
    });
  }

}
