import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-expense-page',
  templateUrl: './expense-page.component.html',
  styleUrls: ['./expense-page.component.css']
})
export class ExpensePageComponent implements OnInit {
  expenses: Observable<Expense[]>
  constructor(public expenseService: ExpenseService) { 
    this.expenses = this.expenseService.getExpenses()
    this.expenses.subscribe(e => console.log(e))
  }

  ngOnInit() {
  }

}
