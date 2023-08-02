import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: any[] = [];
  currentIndex: number = 0;

  constructor(private sanitizer: DomSanitizer) {}

  arrowClicked(value: string) {
    console.log(value + ' clicked')
    
      if(value == 'left') {
        this.currentIndex = this.currentIndex-1
        if(this.currentIndex < 0) this.currentIndex = (this.slides.length -1)
      } else {
        this.currentIndex = this.currentIndex+1
        if(this.currentIndex > this.slides.length) this.currentIndex = 0
      }
      console.log('current index is:' + this.currentIndex)
  
  }
  ngOnInit(): void {}
}
