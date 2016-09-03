import { Injectable, Type } from '@angular/core';
// import { Logger } from './logger.service';
import { Item } from '../item';

const ITEMS = [
    //  new Item('Finish assignment on nodejs', false),
    // new Item('Start final project', false),
    // new Item('Add styling to previous project', false)
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