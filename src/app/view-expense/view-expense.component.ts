import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent {

  allExpenses!: any[];
  boolVar: boolean=true;
  sample !: string;
  viewAll(){
    this.testService.showData();
    // this.allExpenses=this.testService.expenses;
    this.allExpenses= JSON.parse(localStorage.getItem("expenses")!)
    console.log(this.allExpenses);
    
    this.boolVar= !this.boolVar;
  }

  constructor(private testService: TestService){
    
  }
}
