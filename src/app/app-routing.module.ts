import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ViewExpenseComponent} from './view-expense/view-expense.component';
import { AppComponent } from './app.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';



const routes: Routes = [
  {path:'addexpense', component: AddExpenseComponent},
  {path:'viewexpense', component: ViewExpenseComponent},
  {path:'editexpense', component: EditExpenseComponent},
  {path:'', redirectTo:'/home', pathMatch: "prefix"},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
