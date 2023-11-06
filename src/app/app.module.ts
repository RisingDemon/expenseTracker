import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FormsModule } from '@angular/forms';
import { TestService } from './test.service';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftMenuComponent,
    AddExpenseComponent,
    ViewExpenseComponent,
    EditExpenseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
