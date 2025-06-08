import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  // styleUrl: './profile.css'
  // styles:['h1{background-color:white}']  // this is used for ts file means we apply style in ts file so that time we can apply this code
  styleUrls:['./profile.btn.css','./profile.css']   //we use multiple css file 
})
export class Profile {

}
