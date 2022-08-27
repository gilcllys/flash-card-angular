import {Component,ViewChild} from '@angular/core';
import {IFlash} from "./flash.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  editing:boolean = false
  question:string=''
  answer:string = ''
  public getRandomNumber() {
    return Math.floor(Math.random() * 10000)
  }

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

  public handleToogleCard(event: any): void {
    event.show = !event.show
  }

  public handleDelete(event:any) {
    const flashId = this.flashes.indexOf(event);
    console.log(flashId)
    this.flashes.splice(flashId, 1)
  }

  handleEdit(event:any){

    //TODO: we will add aditing logic after adding the form
  }

  handleRemenberChange(event:any){
    event.flash.remembered = event.flag
  }

  onSubmit(f:NgForm){
    if(f.valid){
      this.flashes.push({
        question: f.value.question,
        answer: f.value.answer,
        show: false,
        id: this.getRandomNumber()
      })
    }

  }

  onClear():void{
    this.question = ''
    this.answer = ''
  }


}
