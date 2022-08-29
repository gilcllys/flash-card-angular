import { Injectable } from '@angular/core';
import {IFlash} from "../flash.model";
import {NgForm} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class FlashService {
  flashes: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer: 1',
      show: false,
      id: this.getRandomNumber()
    },
    {
      question: 'Question 2',
      answer: 'Answer: 2',
      show: false,
      id: this.getRandomNumber()
    },
    {
      question: 'Question 3',
      answer: 'Answer: 3',
      show: false,
      id: this.getRandomNumber()
    }]

  public ServiceHandleToogle(event:any){
    return !event.show
  }
  public getRandomNumber() {
    return Math.floor(Math.random() * 10000)
  }
  public ServiceOnSubmit(f:NgForm){
    if(f.valid){
      this.flashes.push({
        question: f.value.question,
        answer: f.value.answer,
        show: false,
        id: this.getRandomNumber()
      })
    }
  }
  public ServicehandleRemenberChange(event:any){
    return event.flash.remembered = event.flag
  }
   public  ServiceHandleDelete(event:any){
     const flashId = this.flashes.indexOf(event);
     this.flashes.splice(flashId, 1)
   }


}
