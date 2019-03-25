import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote("Yasmin", " ", "Our greatest glory is not in never falling",),
    new Quote("Abdi.H", " ", "All our dreams can come true",),
    new Quote("Sumaya"," ","It does not matter how slowly you go as long as you do not stop",)
  ]
addQuote(pickedQuote){
  this.quotes.push(pickedQuote)
}
upvote(i){
  this.quotes[i].upvotes ++;
}
down.vote(i){
  this.quotes[i].downvotes ++;
}
deleteQuote(i){
  this.quotes.splice(i,1);
}

  constructor() { }

  ngOnInit() {
  }

}
