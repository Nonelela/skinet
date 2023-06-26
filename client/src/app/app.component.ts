import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];

  //Typically used for dependncy injection. May be to its called before init
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    //Anytime an observable is used a subscribe needs to be called
    //If you dont subcribe to it nothing happens, the request to the API will also not happen
    //To observe an observeble. You subscribe and observe the data coming back
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: response => this.products = response.data,//what to do next
      error: error => console.log(error), //what to do if there is an error 
      complete: () => {
        console.log('request completed');
        console.log('Extra statement');
      }
    })
  }
}
