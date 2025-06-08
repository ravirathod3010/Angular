import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected title = 'counter-app';
  count = 0

  handleIncrement(){
    this.count=this.count+1
  }
  handleDecrement(){
    this.count=this.count-1
  }
  handleReset(){
    this.count=0
  }
}
