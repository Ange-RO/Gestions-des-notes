import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category: Category = { id: 0, name: '', createdAt: '', updatedAt: '' };

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      if (id) {
        this.categoryService.getCategoryById(id).subscribe(data => {
          this.category = data;
        });
      }
    }
  }

  saveCategory(): void {
    if (this.category.id) {
      this.categoryService.updateCategory(this.category.id, this.category).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoryService.createCategory(this.category).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }
}
