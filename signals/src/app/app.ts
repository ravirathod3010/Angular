import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(10);
  x=20;

  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }
  updateValue(val:string){
    if(val=='inc'){
      this.count.set(this.count()+1)
    }
    else{
      this.count.set(this.count()-1)
    }
  }
}
