import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote("Yasmin", "Our greatest glory is not in never falling","M.L.K "),
    new Quote("Abdi.H", "All our dreams can come true","Justin Biggs "),
    new Quote("Sumaya","It does not matter how slowly you go as long as you do not stop","Oprah Winfrey ",)
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
