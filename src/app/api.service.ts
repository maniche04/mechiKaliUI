import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from './models/Article';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private articlesObservable: Observable<any[]>;
  public articles: Article[];

  constructor(private db: AngularFirestore) {
    this.articlesObservable = this.db.collection('/articles').valueChanges();
  }

  public fetchArticles() {
    this.articlesObservable = this.db.collection('/articles').valueChanges();
    this.articlesObservable.pipe(take(1)).subscribe(data => {
      this.articles = data;
    });
  }

  public getArticles() {
    return this.articles;
  }

}
