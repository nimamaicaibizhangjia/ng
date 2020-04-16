import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch04';
  shouldShow=false;
  score=70;
  color:string;
  fontsize:string
  isBordered=true;
  cities=['杭州','南京','上海','无锡']
  classObj={
    bordered:this.isBordered,
    blue:false,
    round:true
  }
  onToggle(){
    this.shouldShow=!this.shouldShow;
    return false;
  }
  grade(){
    return Math.floor(this.score/10);
  }
  onIput(evt:Event){
    const inputEle=<HTMLInputElement>evt.target;
     this.score=Number(inputEle.value);
  }
  apply(color:string,fontsize:string){
this.color=color;
this.fontsize=fontsize;
  }
zzz(){
    this.isBordered=!this.isBordered;
  }
}
