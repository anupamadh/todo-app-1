import { Component } from '@angular/core';
import {Item} from '../item' ;

@Component({
    selector: 'completed-list',
    inputs: ['item'],
    host: {
        class: 'row'
    },
    template: `
  
    <div class="twelve wide column" *ngIf="item.completed===true">
      <a class="ui large header">
        {{ item.title }}
      </a>
    </div> `
})

export class CompletedListComponent{

}