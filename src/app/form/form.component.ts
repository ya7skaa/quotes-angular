import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Output() emitQuote = new EventEmitter()
  quoteWriter: string
  quoteString: string
  quoteAuthor: string
  words: any

  submitQuote() {
    this.words = new Quote(this.quoteWriter, this.quoteString, this.quoteAuthor)
    this.quoteWriter = ''
    this.quoteString = ''
    this.quoteAuthor = ''
    this.emitQuote.emit(this.words)
  }

  constructor() { }

  ngOnInit() {
  }

}
