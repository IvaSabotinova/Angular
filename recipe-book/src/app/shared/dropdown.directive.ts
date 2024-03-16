import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    // @HostListener('click') toggleOpen() {
    //     if (this.elementRef.nativeElement.classList.contains('open')) {
    //         this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    //     } else {
    //         this.renderer.addClass(this.elementRef.nativeElement, 'open');

    //     }
    // }


    // dropdown can be closed by a click anywhere outside

    // @HostBinding('class.open') isOpen = false;
    // constructor(private elRef: ElementRef) { }

    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // }
}