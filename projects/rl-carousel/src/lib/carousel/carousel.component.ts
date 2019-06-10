import {AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, Renderer2} from '@angular/core';
import {CarouselSlideComponent} from '../carousel-slide/carousel-slide.component';
import {RlCarouselService} from '../rl-carousel.service';

@Component({
  selector: 'rl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() table = [];


  @ContentChildren(CarouselSlideComponent) items: QueryList<CarouselSlideComponent>;

  lastIndex ;

  constructor(public sh: RlCarouselService , private render: Renderer2 ) {
    // this.elements.createComponent(child)
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.sh.setTable(this.items['_results']) ;
    this.lastIndex = this.items.length - 1 ;
    // console.log(this.items['_results']);

    setTimeout( ()=> {
      this.items['_results'][this.sh.index].animState = 'active';

      // this.render.setStyle(this.el(this.sh.index ).el.nativeElement, 'z-index' , '150')
      // this.render.setStyle(this.el(this.sh.index ).el.nativeElement, 'opacity' , '1')
      // this.render.setStyle(this.el(this.sh.index ).el.nativeElement, 'transform' , 'translateX(0)')
    } ,0 );

    this.sh.$index
      .subscribe( _index => {
        try { this._slideMe(_index) } catch (e) {console.log(e) }
      })
  }

  _slideMe(_index){


    // this.table.forEach( (el, index ) =>
    //   this.render.setStyle(this.el(index).el.nativeElement, 'z-index' , '100')
    // )
    //
    // this.render.setStyle(this.el(_index).el.nativeElement, 'z-index' , '150')


    // this.render.setStyle(this.el(this.sh.prevIndex()).el.nativeElement , 'z-index' , '1')
    // this.render.setStyle(this.el(this.sh.nextIndex()).el.nativeElement , 'z-index' , '1')


    if (this.sh.action === 1) {
      // this.elementNext = this.el(this.sh.nextIndex())

      this.items['_results'][this.sh.index].animState = 'leftToCenter';
      this.items['_results'][this.sh.lastIndex].animState = 'centerToRight';

    }

    if (this.sh.action === -1) {
      this.items['_results'][this.sh.index].animState = 'rightToCenter';
      this.items['_results'][this.sh.lastIndex].animState = 'centerToLeft';

    }



  }

  el(index){
    // return this.items['_results'][index].el.nativeElement
    return this.items['_results'][index]
  }

}
