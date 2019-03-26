export class Quote {
  public upvotes: number
  public downvotes: number
  public myDate: Date
  constructor(public writer:string, public quote:string, public author:string){
  this.upvotes=0;
  this.downvotes=0;
  this.myDate=new Date;
   }
}
