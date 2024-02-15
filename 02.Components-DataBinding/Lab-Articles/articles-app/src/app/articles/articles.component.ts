import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor() { };

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
