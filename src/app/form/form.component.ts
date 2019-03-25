import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quote = new Quote ("","","");

  @Output() emitQuote =new EventEmitter()
  quoteString: string
  quoteWriter:string
  quoteAuthor:string
  words:any

  submitQuote(){
    this.words= new Quote("","","")
    this.emitQuote.emit(this.words)
  }

  constructor() { }

  ngOnInit() {
  }

}
