import { Component } from '@angular/core';
import {Article} from '../article' ;



@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    template: `
    <div class="twelve wide column">
      <a class="ui large header" href="{{ article.link }}">
        {{ article.title }}
      </a>
      <!-- right here -->
<div class="meta"></div>
      <ul class="ui big horizontal list voters">
      <input type="checkbox" #chkbox [checked]="article.completed" (click)="setCompleted(article, chkbox.checked)">
<li class="item">
       {{article.completed ? 'Is Done' : 'Working on it' }}
</li> 
</ul>
</div> `
})


export class ArticleComponent {
    article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }

setCompleted(article: Article, checked: boolean){
  article.completed = checked;
}
}