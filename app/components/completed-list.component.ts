import { Component } from '@angular/core';
import {Item} from '../item' ;

@Component({
    selector: 'completed-list',
    inputs: ['item'],
    host: {
        class: 'row'
    },
    templateUrl:'app/components/views/completed-list.html' 
})

export class CompletedListComponent{

}