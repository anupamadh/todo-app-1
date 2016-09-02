import { Component } from '@angular/core';
import { Item } from '../item';

 @Component({
    selector: 'todo-article',
    inputs: ['item'],
    host: { class: 'row' },
     template: `
<div class="twelve wide column" *ngIf="item.completed===false" #myElement>
  <a class="ui large header">
        {{ item.title }}
      </a>
  <!-- right here -->
  <div class="meta"></div>
  <ul class="ui big horizontal list voters">
    <input type="checkbox" #chkbox [checked]="item.completed" (click)="setCompleted(item, chkbox.checked)">
    <li class="item">
      {{item.completed ? 'Is Done' : 'Working on it' }}
    </li>
    <li class="item">
      <a (click)="myElement.remove()"> x </a>
    </li>
  </ul>
</div>
` }) 
export class TodoArticleComponent { item: Item; setCompleted(item: Item, checked: boolean) 
  { 
    item.completed = checked;
   } 
  }