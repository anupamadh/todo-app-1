import { Injectable, Type } from '@angular/core';
import { Logger } from './logger.service';
import { Article } from './article';

const ARTICLES = [
     new Article('Angular 2', 'http://angular.io', 3),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1)
      ];

@Injectable()
export class BackendService {
  constructor() {}

  getAll(type: Type): PromiseLike<any[]> {
    if (type === Article) {
      // TODO get from the database
      return Promise.resolve<Article[]>(ARTICLES);
    }
    let err = new Error('Cannot get object of this type');
    // this.logger.error(err);
    throw err;
  }
}