import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote("Yasmin", "M.L.K ", "Our greatest glory is not in never falling",),
    new Quote("Abdi.H", "Justin Biggs ", "All our dreams can come true",),
    new Quote("Sumaya","Oprah Winfrey ","It does not matter how slowly you go as long as you do not stop",)
  ]
addQuote(pickedQuote){
  this.quotes.push(pickedQuote);
}
upvote(i){
  this.quotes[i].upvotes ++;
}
downvote(i){
  this.quotes[i].downvotes ++;
}
deleteQuote(i){
  this.quotes.splice(i,1);
}
onstructor() { }

  ngOnInit() {
  }

}
