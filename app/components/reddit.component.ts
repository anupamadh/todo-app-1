// import { ArticleComponent } from './reddit-article.component'
import { Article } from '../article' ;
import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'reddit',
    template: `
    <form class="ui large form segment">
      <h3 class="ui header">Add a Link</h3>
      <div class="field">
        <label for="title">Title:</label>
        <input name="title" #newtitle>  <!-- changed -->
      </div>
  
      <!-- added this button -->
      <button type ="button" (click)="addArticle(newtitle)"
              class="ui positive right floated button">
        Submit link
      </button>
    </form>
    <div class="ui grid posts">
      <h2> We just started</h2>
      <reddit-article *ngFor = "let foobar of sortedArticles()" [article] = "foobar">
      </reddit-article>
    </div>
    <div class="ui grid posts">
      <h2> We are good</h2>
      <completed-list *ngFor = "let foobar of sortedArticles()" [article] = "foobar">
      </completed-list>
    </div>
`,
providers: [ArticleService]
})
export class RedditApp implements OnInit{

    articles: Article[];

    addArticle(title: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}`);
        this.articles.push(new Article(title.value, false ,0));
        title.value = '';
      
    }

    constructor(private _articleService: ArticleService){
      
    }
    sortedArticles(): Article[] {
      console.log("this.articles: ", this.articles);
return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
}



ngOnInit() {
  this.articles = this._articleService.getArticles();
}


}