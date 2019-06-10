import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

let timer = '600ms';

@Component({
  selector: 'rl-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.sass'],
  animations: [

    trigger('rl-animate', [
      state('active', style({
        zIndex: '100',
        opacity: 1,
        transform: 'translateX(0)'
      })),

      state('inactive', style({
        opacity: 0,
        zIndex: '-1',
      })),

      // transition('active => *', animate('1000ms ease-out'), {delay: 3000}),
      // transition('* => active', animate('0ms ease-in')),
      // transition('active  <=> *', animate('1000ms ease-out'))




      state('right', style({
        zIndex: 10,
        opacity: 1,
        transform: 'translateX(-100%)' ,
      })),

      state('left', style({
        zIndex: 10,
        opacity: 1,
        transform: 'translateX(-100%)' ,
      })),

      state('center', style({
        zIndex: 100,
        opacity: 1,
        transform: 'translateX(0)' ,
      })),

      state('leftToCenter', style({
        zIndex: 150,
        opacity: 1,
        transform: 'translateX(0)' ,
      }))

      ,state('rightToCenter', style({
        zIndex: 150,
        opacity: 1,
        transform: 'translateX(0)' ,
      })),

      state('centerToLeft', style({
        opacity: 0,
        transform: 'translateX(-100%)' ,
      }))

      ,state('centerToRight', style({
        opacity: 0,
        transform: 'translateX(100%)' ,
      })),


      transition('* => centerToLeft' , animate(timer , keyframes([
        style({
          opacity: 1,
          zIndex: '100',
          transform: 'translateX(0)' , offset: 0
        }),
        style({
          opacity: .4,
          zIndex: '100',
          transform: 'translateX(-100%)' , offset: 1
        }),
      ]))),

      transition('* => centerToRight' , animate(timer , keyframes([
        style({
          opacity: 1,
          zIndex: '100',
          transform: 'translateX(0)' , offset: 0
        }),
        style({
          opacity: .4,
          zIndex: '100',
          transform: 'translateX(100%)' , offset: 1
        }),
      ]))),

      transition('* => leftToCenter' , animate('450ms' , keyframes([
        style({
          opacity: 1,
          zIndex: '150',
          transform: 'translateX(-100%)' , offset: 0
        }),
        style({
          opacity: 1,
          zIndex: '110',
          transform: 'translateX(0)' , offset: 1
        }),
      ]))),

      transition('* => rightToCenter' , animate('450ms' , keyframes([
        style({
          opacity: 1,
          zIndex: '150',
          transform: 'translateX(100%)' , offset: 0
        }),
        style({
          opacity: 1,
          zIndex: '110',
          transform: 'translateX(0)' , offset: 1
        }),
      ]))),

    ])
  ]
})

export class CarouselSlideComponent implements OnInit {

  @ViewChild('caroItem', {static: false}) el: ElementRef

  @Input() imageUrl = '';
  @Input() animState = 'inactive';

  constructor() { }

  ngOnInit() {
  }

}
