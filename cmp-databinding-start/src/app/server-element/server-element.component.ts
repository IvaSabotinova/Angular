import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
   {
  //  @Input('srvElement') element: { type: string, name: string, content: string }
  // @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string;
  @ContentChild('serverElementParagraph') paragraph: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(this.paragraph?.nativeElement?.textContent);
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {    
    console.log('ngAfterContentInit called!');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
    
  }

}
