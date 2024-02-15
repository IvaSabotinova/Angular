import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article = new Article('', '', '', ''); //come from articles component
  @Input() articleDesc: string = ''; //come from articles component
  descToShow: string;
  articleDescLen: number; //counter which controls how many symbols to show.
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = true;
  imageButtonTitle: string = "Hide Image"; //switches between Show Image and Hide Image

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore() {
    throw new Error('Method not implemented.');
  }

  hideDesc() {
    throw new Error('Method not implemented.');
  }

  ToggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show Image';

  }
}
