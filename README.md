# RlCarouselProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


##NPM

```bash
npm i rl-carousel
````


##Usage
```typescript
import {RlCarouselModule} from 'rl-carousel'

imports: [
    ...    
    RlCarouselModule
  ]
````

```html
 <rl-carousel>
      <rl-carousel-slide [imageUrl]="'../assets/images/meerkats.jpg'"></rl-carousel-slide>
      <rl-carousel-slide [imageUrl]="'../assets/images/fawn.jpg'"></rl-carousel-slide>
      <rl-carousel-slide [imageUrl]="'../assets/images/cat.jpg'"></rl-carousel-slide>
      ...
</rl-carousel>
````
```sass
::ng-deep //optional 
    rl-carousel .container
      position: relative
      box-sizing: border-box
      min-width: 600px
      min-height: 400px
      @media screen and (max-width: 600px)
        width: 100% !important
        height: 66vw !important
        min-width: 100%
        min-height: 66vw
````
