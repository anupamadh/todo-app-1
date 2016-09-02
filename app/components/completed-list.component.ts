import { Component } from '@angular/core';
import {Article} from '../article' ;

@Component({
    selector: 'completed-list',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    template: `
  
    <div class="twelve wide column" *ngIf="article.completed===true">
      <a class="ui large header">
        {{ article.title }}
      </a>
    </div> `
})

export class CompletedListComponent{

}