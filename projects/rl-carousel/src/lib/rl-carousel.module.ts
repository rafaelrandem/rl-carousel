import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CarouselComponent, CarouselSlideComponent],
  imports: [CommonModule
  ],
  exports: [CarouselComponent, CarouselSlideComponent]
})
export class RlCarouselModule { }
