import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-highlight-demo',
  templateUrl: './highlight-demo.component.html',
  styleUrl: './highlight-demo.component.css'
})
export class HighlightDemoComponent implements AfterViewInit {
  backgroundColor: string = 'yellow';

  //@ViewChild('myPara') myParagraph!: ElementRef
  @ViewChild('myPara') myParagraph!: HighlightDirective

  handleColorChange(event: string) {
    console.log('new color:', event);
  };

  ngAfterViewInit(): void {
    console.log(this.myParagraph);
    setTimeout(() => { this.myParagraph.color = 'violet' });
  }
}
