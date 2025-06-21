import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html'
  // styleUrl: './app.css'
})
export class App {
  productList:any
  constructor(private productService:Products){

  }
  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);
      this.productList=data.products
    })
  }
}
