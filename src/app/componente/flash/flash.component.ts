import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFlash} from '../../flash.model'

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent {
  visible: boolean = false
  @Input() flash: IFlash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false
  };
  @Output() onToogleCard = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onRemenberChange = new EventEmitter();

  public deleteFlash(){
    this.onDelete.emit(this.flash)
  }

  public editFlash(){
    this.onEdit.emit(this.flash.id)
  }

  public markCorrect(){
    this.onRemenberChange.emit(
      {
        flash: this.flash,
        flag: 'correct'
      }
    )
  }

  public markIncorrect(){
    this.onRemenberChange.emit(
      {
        flash: this.flash,
        flag: 'incorrect'
      }
    )
  }

  public toogleCard() {
    this.onToogleCard.emit(this.flash)
  }

  public  changeColor(){
    return `${this.flash.remembered} card-header`
  }
  constructor() {
  }

}
