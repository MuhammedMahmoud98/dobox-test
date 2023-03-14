import {
  AfterViewInit, Directive, ElementRef, HostListener, Input,
} from '@angular/core';

@Directive({
  selector: '[appRemoveClass]',
})
export class RemoveClassDirective implements AfterViewInit {
  @Input() className!: string;

  constructor(private ref: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.getWindowInnerWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    const { innerWidth } = event.target;
    this.classDependOnWidthSize(innerWidth);
  }

  getWindowInnerWidth(): void {
    const { innerWidth } = window;
    this.classDependOnWidthSize(innerWidth);
  }

  classDependOnWidthSize(innerWidth: number): void {
    if (innerWidth < 767) {
      this.ref.nativeElement.classList.remove(this.className);
    } else {
      this.ref.nativeElement.classList.add(this.className);
    }
  }
}
