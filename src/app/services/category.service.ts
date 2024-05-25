import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { FirebaseDocument } from '../core/interfaces/firebase-document';
import { Category } from '../core/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService {

  getCategory() {
    return this.get<FirebaseDocument<Category>[]>('categories.json')
  }

  getCategoryById(id: string) {
    return this.get<FirebaseDocument<Category>[]>(`categories/${id}.json`)
  }
  
}
