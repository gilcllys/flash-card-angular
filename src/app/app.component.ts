import {Component,ViewChild} from '@angular/core';
import {IFlash} from "./flash.model";
import {NgForm} from "@angular/forms";
import {FlashService} from "./service/flash.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private flashService: FlashService) {
  }
  updateFlash : any = []
  editing:boolean = false
  question:string= ''
  answer:string = ''
  flashes: IFlash[] = this.flashService.flashes

  public handleToogleCard(event: any) {
    event.show=this.flashService.ServiceHandleToogle(event)
  }

  public handleDelete(event:any) {
    this.flashService.ServiceHandleDelete(event)
  }

  handleEdit(event: any) {
    this.question = event.question
    this.answer = event.answer
    this.updateFlash = event
    this.editing = true
  }

  handleRemenberChange(event:any){
    this.flashService.ServicehandleRemenberChange(event)
  }

  onSubmit(f:NgForm){
    this.flashService.ServiceOnSubmit(f)
  }

  onClear():void{
    this.question = ''
    this.answer = ''
  }
  onCancel():void{
    this.editing = false
  }

  onUpdate() {
    const flashCardIndex = this.flashes.indexOf(this.updateFlash)
    this.flashes[flashCardIndex].question = this.question
    this.flashes[flashCardIndex].answer = this.answer
  }


}
