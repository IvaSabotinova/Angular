import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighLight]'
})
export class BasicHighLightDirective implements OnInit {
    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'green';
    }
}