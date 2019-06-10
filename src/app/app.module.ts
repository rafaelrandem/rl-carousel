import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { RlCarouselModule } from '../../projects/rl-carousel/src/lib/rl-carousel.module';
// import { RlCarouselModule} from 'rl-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RlCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
