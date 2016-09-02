import { Injectable } from '@angular/core';

import { Item } from '../item';
import { BackendService } from './backend.service';
// import { Logger } from './logger.service';

@Injectable()
export class ArticleService {
  private articlearr: Item[] = [];

  constructor(
    private backend: BackendService
    ) { }

  getArticles() {
    this.backend.getAll(Item).then( (articles: Item[]) => {
      // this.logger.log(`Fetched ${articles.length} articles.`);
      this.articlearr.push(...articles); // fill cache
    });
    return this.articlearr;
  }
}
