import { Component, Input } from '@angular/core';
import { UserData } from '../user-data';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  amount !: number;
  category !: string;
  desc !:string;
  date !: string;

  dataArr !: any[];
   
  userDataObj !: UserData;
  obj: any={
    amount: this.amount,
    category: this.category,
    desc: this.desc,
    date: this.date
  } 
  submitInfo(){
    this.obj.amount= this.amount;
    this.obj.category=this.category;
    this.obj.desc= this.desc;
    this.obj.userDate=this.date;
    console.log(this.date);
    
    this.dataArr= this.testService.expenses;
    console.log(this.obj);
    console.log(this.dataArr);
    
    this.dataArr.push(this.obj);
    console.log(this.dataArr);
    

    this.testService.addData(this.dataArr);
  }

  constructor(private testService: TestService){

  }
}
