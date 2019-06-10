import {BehaviorSubject} from 'rxjs';
import {throttleTime} from 'rxjs/operators';


export class RlCarouselService {

  table = [];
  current_item ;
  index = 0 ;
  lastIndex = 0 ;
  $index = new BehaviorSubject(this.index);
  action ;
  $action = new BehaviorSubject(0);

  constructor() {
    this.$action.pipe(throttleTime(600)).subscribe( action => {
      action === 1 ? this.next() : null;
      action === -1 ? this.prev() : null;
      console.log('action', action)
    })
  }

  public setTable(_table) {
    this.table = _table ;
    this.current_item = this.table[this.index]
    // console.log(this.table)
  }

  public setCurrent(_index){
    this.current_item = this.table[_index];
    this.$index.next(_index);
    console.log(this.$index.value )
    // console.log('index:' , this.index , ' / lastIndex:' , this.lastIndex)
  }

  public _buttonNext(){
    this.$action.next(1)
  }

  public _buttonPrev(){
    this.$action.next(-1)
  }


  private next(){
    this.action = 1;
    this.lastIndex = this.index;
    this.index = this.nextIndex();
    this.setCurrent(this.index)
  }

  private prev() {
    this.action = -1;
    this.lastIndex = this.index;
    this.index = this.prevIndex();
    this.setCurrent(this.index)
  }

  public nextIndex() {
    let index = this.index ;
    index < this.table.length- 1 ? index++ : index = 0;
    return index
  }

  public prevIndex(){
    let index = this.index;
    index > 0 ? index-- : index = this.table.length  -1 ;
    return index
  }

}
