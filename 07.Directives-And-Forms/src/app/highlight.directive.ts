import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighLightExported'
})
export class HighlightDirective implements OnInit, OnChanges {

  // @Input() backgroundColor: string = 'yellow';
  //@Input() appHighlight: string = 'blue';
  @Input('appHighlight') backgroundColor: string = 'blue';

  @HostListener('mouseenter', ['$event'])
  handleMouseEnter(event: MouseEvent) {
   // console.log(event.target)
    this.el.nativeElement.style.color = 'red';
    this.colorChange.emit('red');
  }

  @HostListener('mouseleave')
  handleMouseLeave() {
    this.el.nativeElement.style.color = 'aqua';
    this.colorChange.emit('aqua');
  }

  // @Input()
  // set color(value: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'color', value);
  // }

  //above can be replaced by below
  @Input()
  @HostBinding('style.color')
  color: string = 'dark';

  @Output() colorChange = new EventEmitter<string>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('appHighlight constructor');

    // (this.el.nativeElement as HTMLElement).addEventListener('mouseenter', () => {
    //       this.el.nativeElement.style.color = 'red';
    // });

    // (this.el.nativeElement as HTMLElement).addEventListener('mouseleave', () => {
    //       this.el.nativeElement.style.color = 'aqua';
    // });
  }


  ngOnInit(): void {
    //this.el.nativeElement.style.backgroundColor = 'yellow';
    // (this.el.nativeElement as HTMLElement).style.backgroundColor = 'yellow';
    // (this.el.nativeElement as HTMLElement).style.backgroundColor = this.backgroundColor;
    //(this.el.nativeElement as HTMLElement).style.backgroundColor = this.appHighlight;
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    this.setBackgroundColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //(this.el.nativeElement as HTMLElement).style.backgroundColor = this.backgroundColor;
    // this.renderer.setStyle(
    //   this.el.nativeElement, 
    //   'background-color', 
    //   this.backgroundColor
    // ); 

    this.setBackgroundColor();
  }

  private setBackgroundColor(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.backgroundColor
    );
  }

}
