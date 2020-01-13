import { Injectable } from '@angular/core';
import { backendUrl } from '../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  constructor(
    private http: HttpClient
    ) { }
    
    public getExpenses() {
      return this.http.get<Expense[]>(backendUrl.expenseService.getExpenses) as Observable<Expense[]>
    }
    
    public addExpense(body: Expense): Promise<Expense> {
      body.id = 0;
      //body.categoryId = 1; //TODO: set category id in modal
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<Expense>(backendUrl.expenseService.saveExpense, body, {responseType: 'json', headers}).toPromise();
    }
  }
  