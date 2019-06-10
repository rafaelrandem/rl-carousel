import {AfterViewInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import {CarouselSlideComponent} from '../carousel-slide/carousel-slide.component';
import {RlCarouselService} from '../rl-carousel.service';

@Component({
  selector: 'rl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  providers: [RlCarouselService]
})
export class CarouselComponent implements  AfterViewInit {

  @Input() table = [];

  @ContentChildren(CarouselSlideComponent) items: QueryList<CarouselSlideComponent>;

  constructor( public sh: RlCarouselService ) { }

  ngAfterViewInit(): void {
    this.sh.setTable(this.items['_results']) ;

    setTimeout( ()=> {
      this.items['_results'][this.sh.index].animState = 'active';
    } ,0 );

    this.sh.$index
      .subscribe( () => {
        try { this._slideMe() } catch (e) {console.log(e) }
      })
  }

  _slideMe(){

    if (this.sh.action === 1) {
      this.items['_results'][this.sh.index].animState = 'leftToCenter';
      this.items['_results'][this.sh.lastIndex].animState = 'centerToRight';
    }

    if (this.sh.action === -1) {
      this.items['_results'][this.sh.index].animState = 'rightToCenter';
      this.items['_results'][this.sh.lastIndex].animState = 'centerToLeft';
    }
  }

  el(index){
    return this.items['_results'][index]
  }

}
