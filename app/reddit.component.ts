// import { ArticleComponent } from './reddit-article.component'
import { Article } from './article' ;
import { Component } from '@angular/core';
import { ArticleService } from './article.service';
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
      <div class="field">
        <label for="link">Link:</label>
        <input name="link" #newlink> <!-- changed -->
      </div>
      <!-- added this button -->
      <button type ="button" (click)="addArticle(newtitle, newlink)"
              class="ui positive right floated button">
        Submit link
      </button>
    </form>
    <div class="ui grid posts">
  <reddit-article *ngFor = "let foobar of articles" [article] = "foobar">
  </reddit-article>
</div>
`,
providers: [ArticleService]
})
export class RedditApp implements OnInit{

    public articles: Article[];
    // constructor() {
    //     this.articles = [
    //         new Article('Angular 2', 'http://angular.io', 3),
    //         new Article('Fullstack', 'http://fullstack.io', 2),
    //         new Article('Angular Homepage', 'http://angular.io', 1),
    //     ];
    // }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }

    constructor(private _articleService: ArticleService){
      
    }
    sortedArticles(): Article[] {
return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
}
getArticles(){
  this._articleService.getArticles().then((articles: Article[]) => this.articles = articles);
}

ngOnInit(): any{
  this.getArticles();
}
}