import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  public category: Category;
  constructor(public activeModal: NgbActiveModal,
              private categoryService: CategoryService) { }

  ngOnInit() {
  }

  save() {
    this.categoryService.addCategory(this.category);
    this.activeModal.close(this.category);
  }

}
