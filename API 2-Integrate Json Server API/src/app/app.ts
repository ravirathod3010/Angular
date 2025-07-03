import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './service/users';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users:any
  constructor(private userService:Users){}
  ngOnInit(){
    this.userService.getUsers().subscribe((data:any)=>{
      console.log(data);
      this.users=data
      
    })
  }
}
