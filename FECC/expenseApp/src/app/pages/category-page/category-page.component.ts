import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  categories: Observable<Category[]>;
  
  constructor(private categoryService: CategoryService) {
      this.categories = categoryService.getCategories();
    }
    
    ngOnInit() {
    }
  }