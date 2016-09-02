// import { ArticleComponent } from './reddit-article.component'
import { Item } from '../item' ;
import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'todo',
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
      <todo-article *ngFor = "let foobar of items" [item] = "foobar">
      </todo-article>
    </div>
    <div class="ui grid posts">
      <h2> We are good</h2>
      <completed-list *ngFor = "let foobar of items" [item] = "foobar">
      </completed-list>
    </div>
`,
providers: [ArticleService]
})
export class TodoApp implements OnInit{

    items: Item[];

    addArticle(title: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}`);
        this.items.push(new Item(title.value, false));
        title.value = '';
      
    }

    constructor(private _articleService: ArticleService){
      
    }




ngOnInit() {
  this.items = this._articleService.getArticles();
}


}