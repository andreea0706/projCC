import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  public expense: Expense;
  public categories: Category[];
  constructor(public activeModal: NgbActiveModal,
              private expenseService: ExpenseService,
              private categoryService: CategoryService) { 
        this.categoryService.getCategories().subscribe(
          c => {
            this.categories = c;
          }
        )
    }

  ngOnInit() {
  }

  save() {
    this.expenseService.addExpense(this.expense);
    this.activeModal.close(this.expense);
  }

}
