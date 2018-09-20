import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {

    return this.db.list('/catagories', ref => {
     // let query = ref.limitToLast(25);
      let query = ref.orderByChild('name');
      return query;

    }).valueChanges();

  }
}
