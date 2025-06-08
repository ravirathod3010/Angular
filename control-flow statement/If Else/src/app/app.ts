import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{
  
  display=true;  //flase = Hide 
  x=10
  toggleDiv=false   //flase = Red and true = Gold

  hide(){
    this.display=false
  }

  show(){
    this.display=true
  }
  toggle(){
    this.display=!this.display;
  }
  toggleTwo(){
    this.toggleDiv=!this.toggleDiv
  }
}