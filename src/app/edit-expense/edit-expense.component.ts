import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent {

  category !: string;
  allExpenses !: any[];
  editedExpense: any[] = [];
  expensesToEdit: any[]=[];
  boolVar : boolean= false;
  boolVarNextComponent : boolean= true;
  toCheck : any[]=[];
  count: number=0;

  amount !: number;
  categoryReal !: string;
  desc !:string;
  date !: string;
  dataArr !: any[];
  obj: any={
    amount: this.amount,
    category: this.category,
    desc: this.desc,
    date: this.date
  } 
  
  edit() {
    // this.allExpenses = this.testService.expenses;
    this.allExpenses= this.allExpenses= JSON.parse(localStorage.getItem("expenses")!)
    this.category = this.category;
    console.log(this.category);

    for (let item of this.allExpenses) {
      console.log(item.category);
      if (item.category == this.category) {

        this.editedExpense.push(item);
      }
    }
    console.log(this.editedExpense);


  }

  getValue(value: any) {
    console.log(value);
    this.toCheck=value[0];
    console.log(this.toCheck);
    this.amount= value[0].amount;
    this.category=value[0].category;
    this.desc= value[0].desc;
    
    this.expensesToEdit=value;
    console.log(this.expensesToEdit);
    for(let item of this.allExpenses){
      console.log(item);
      if(item==this.toCheck){
        this.allExpenses.splice(this.count,1);
        console.log(this.allExpenses);
        
      }
    }
    this.boolVar = !this.boolVar;
    this.boolVarNextComponent= !this.boolVarNextComponent;
    this.count++;
  }

  submitChange(){
    console.log("hello");
    
    this.obj.amount= this.amount;
    this.obj.category=this.category;
    this.obj.desc= this.desc;
    this.obj.date=this.date;
    this.allExpenses.push(this.obj);
    this.testService.editedData(this.allExpenses)
  }
  constructor(private testService: TestService) {

  }
}
