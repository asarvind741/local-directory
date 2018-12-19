import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: "['hoverdirective']"
})

export class HoverDirective {
    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ) { }

    @HostListener('mouseenter') onHover(): void {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
}
