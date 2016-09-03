import { Component } from '@angular/core';
import { Item } from '../item';



 @Component({
    selector: 'todo-article',
    inputs: ['item'],
    host: { class: 'row' },
     templateUrl: 'app/components/views/todo-article.html'
 }) 
export class TodoArticleComponent { 
  item: Item; 

  setCompleted(item: Item, checked: boolean) 
  { 
   setTimeout(() => {  
  item.completed = checked;;
}, 500)
    
   } 
  }