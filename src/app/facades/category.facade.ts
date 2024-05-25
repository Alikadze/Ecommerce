import { Injectable, inject } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { map } from "rxjs";
import { Category } from "../core/interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  categoryService = inject(CategoryService)

  getCategories() {
    return this.categoryService.getCategory()
      .pipe(
        map((category: any) => {
          return Object.keys(category).map(key => ({
            ...category[key],
            id: key
          }) as Category )
        })
      )
  }

  getCategoriresById(id: string) {
    return this.categoryService.getCategoryById(id);
  }


}