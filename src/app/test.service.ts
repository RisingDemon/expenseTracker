import { Injectable } from '@angular/core';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  expenses : any[]=[
    {
      amount:12000,
      category: "mobile",
      desc: "personal",
      date: "2023-12-16"
    },
    {
      amount:4000,
      category: "electronics",
      desc: "personal",
      date: "2023-12-18"
    },
    {
      amount:32000,
      category: "mobile",
      desc: "personal",
      date: "2023-12-16"
    },
  ];
  

  addData(data: any){
    console.log(data);
    this.expenses=data
    console.log(this.expenses);
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
    
  }

  showData(){
    console.log(this.expenses);
    // localStorage.setItem("expenses", JSON.stringify(this.expenses));
    
  }
  editedData(data: any){
    this.expenses=data;
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
    console.log(this.expenses);
    
  }
  
  constructor() { }
}
