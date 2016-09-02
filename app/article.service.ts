import { Injectable } from '@angular/core';

import { Article } from './article';
import { BackendService } from './backend.service';
// import { Logger } from './logger.service';

@Injectable()
export class ArticleService {
  private articlearr: Article[] = [];

  constructor(
    private backend: BackendService,
    ) { }

  getArticles() {
    this.backend.getAll(Article).then( (articles: Article[]) => {
      // this.logger.log(`Fetched ${articles.length} articles.`);
      this.articlearr.push(...articles); // fill cache
    });
    return this.articlearr;
  }
}
