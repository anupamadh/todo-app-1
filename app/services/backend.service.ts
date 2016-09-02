import { Injectable, Type } from '@angular/core';
// import { Logger } from './logger.service';
import { Item } from '../item';

const ITEMS = [
     new Item('Angular 2', false),
    new Item('Fullstack', false),
    new Item('Angular Homepage', false)
      ];

@Injectable()
export class BackendService {
  constructor() {}

  getAll(type: Type): PromiseLike<any[]> {
    if (type === Item) {
      // TODO get from the database
      return Promise.resolve<Item[]>(ITEMS);
    }
    let err = new Error('Cannot get object of this type');
    // this.logger.error(err);
    throw err;
  }
}