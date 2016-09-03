// import { ArticleComponent } from './reddit-article.component'
import { Item } from '../item' ;
import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'todo',
    template: `
<label class="label">Add Task</label>
<p class="control">
  <input class="input" type="text" placeholder="Text input" #newitem>
</p>
<p class="control">
  <button class="button is-primary" (click)="addItem(newitem)">Submit</button>
  <button class="button is-link">Cancel</button>
</p>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-parent">
    
    <div class="tile is-child box">
       <h2 class="title is-3"> Pending Tasks</h2>
      <todo-article *ngFor = "let foobar of items" [item] = "foobar">
      </todo-article>
    </div>
    <div class="tile is-child box">
     <h2 class="title is-3"> Completed Tasks</h2>
      <completed-list *ngFor = "let foobar of items" [item] = "foobar">
      </completed-list>
    </div>
  </div>
</div>
`,
providers: [ArticleService]
})
export class TodoApp implements OnInit{

    items: Item[];

    addItem(title: HTMLInputElement): void {
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