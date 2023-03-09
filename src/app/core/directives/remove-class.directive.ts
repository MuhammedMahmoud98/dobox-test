import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRemoveClass]'
})
export class RemoveClassDirective implements AfterViewInit {
  @Input() className!: string;
  constructor(private ref: ElementRef<HTMLElement>) {

  }

  ngAfterViewInit() {
    this.getWindowInnerWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    const innerWidth = event.target.innerWidth;
    if (innerWidth < 767) {
      this.ref.nativeElement.classList.remove(this.className);
    } else {
      this.ref.nativeElement.classList.add(this.className);
    }
  }

  getWindowInnerWidth(): void {
    const innerWidth = window.innerWidth;
    console.log(innerWidth, this.className);
    if (innerWidth < 767) {
      this.ref.nativeElement.classList.remove(this.className);
    } else {
      this.ref.nativeElement.classList.add(this.className);
    }
  }

}
