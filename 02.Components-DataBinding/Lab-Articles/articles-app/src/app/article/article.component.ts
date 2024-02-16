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

  readMore(): void {
    this.articleDescLen += this.symbols;
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }
  }

  hideDesc() {
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;

  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show Image';

  }
}
