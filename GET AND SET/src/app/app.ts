import { Component, signal } from "@angular/core";
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  // styleUrl: '.app.css'
})

export class App{
  name=""
  displayName=""
  email=""
  getName(event:Event){
    const nm = (event.target as HTMLInputElement).value
    // console.log(name);
    
    this.name = nm;
    //we can use = this.name = (event.target as HTMLInputElement).value 

  }
  showName(){
    this.displayName=this.name
  }
  setName(){
    this.name="Sam"
  }
  getEmail(val:string){
    console.log(val);
    this.email = val
  }
    setEmail(){
    
    this.email = "default@test.com"
  }
}