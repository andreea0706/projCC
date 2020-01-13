import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { ExpenseService } from 'src/app/services/expense.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoryService } from 'src/app/services/category.service';
import { Expense } from 'src/app/models/expense';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  @Input() public expense: Expense = {
    id: null,
    categoryId: null,
    name: null,
    value: 0,
    description: null,
    category: null
  };

  @Input() public category: Category = {
    id: null,
    name: null,
    description: null,
    expenses: null
  };


  constructor(public authService: AuthenticationService, 
              private modalService: NgbModal, config: NgbModalConfig, 
              private expenseService: ExpenseService,
              private categoryService: CategoryService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  createNewExpense() {
    console.log('Acum creaza un expense nou');
    const modalRef = this.modalService.open(AddExpenseComponent, { centered: true, windowClass: 'my-modal'});
    modalRef.componentInstance.expense = this.expense;
    modalRef.result.then((result) => {
      if (result) {
      console.log(result);
      
      }
      });
  }

  createNewCategory() {
    console.log('Acum creaza o categorie noua');
    const modalRefCateg = this.modalService.open(AddCategoryComponent, { centered: true, windowClass: 'my-modal'});
    modalRefCateg.componentInstance.category = this.category;
    modalRefCateg.result.then((result) => {
      if (result) {
      console.log(result);
      }
      });
    
  }
}
