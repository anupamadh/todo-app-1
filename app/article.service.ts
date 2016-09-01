import { Injectable } from '@angular/core';
import { ARTICLES } from './mock-article';


@Injectable()
export class ArticleService{
    getArticles(){
        return Promise.resolve(ARTICLES);
    }
}