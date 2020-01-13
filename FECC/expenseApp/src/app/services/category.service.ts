import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import { backendUrl } from '../constants';
import { BoundDirectivePropertyAst } from '@angular/compiler';

@Injectable()
export class CategoryService {

    constructor(
        private http: HttpClient
    ) { }

    public getCategories() {
        return this.http.get<Category[]>(backendUrl.categoryService.getCategories) as Observable<Category[]>
      }

    public addCategory(body: Category): Promise<Category> {
        body.id = 0;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Category>(backendUrl.categoryService.saveCategory, body, {responseType: 'json', headers}).toPromise();
    }
}