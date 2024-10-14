import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNotImage]'
})
export class NotImageDirective {

  constructor(private elementImage: ElementRef) { }

  @HostListener('error')
  errorLoadImg(): void{
    this.elementImage.nativeElement.src = 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/GoT-Default.webp'
  }

}
