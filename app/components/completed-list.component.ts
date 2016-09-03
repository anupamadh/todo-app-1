import { Component } from '@angular/core';
import {Item} from '../item' ;

@Component({
    selector: 'completed-list',
    inputs: ['item'],
    host: {
        class: 'row'
    },
    template: `
  <div class="media-content" *ngIf="item.completed===true">
        <div class="content">
      <p>
        <strong>  {{ item.title }}</strong> 
      </p>
    </div>
    </div>`
})

export class CompletedListComponent{

}