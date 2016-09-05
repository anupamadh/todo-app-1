import { Item } from '../item' ;
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'todo',
    templateUrl: 'app/components/views/todo.html',

})

export class TodoApp {

    items: Item[]=[];

    addItem(title: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value}`);
        this.items.push(new Item(title.value, false));
        title.value = '';
      
    }

    constructor(){}


}