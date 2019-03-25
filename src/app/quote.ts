export class Quote {
  public upvotes: number
  public downvotes: number
  public myDate: Date
  constructor(, public author:string, public quote:string ){
  this.upvotes=0;
  this.downvotes=0;
  this.myDate=new Date;
   }
}
