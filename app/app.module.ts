import { NgModule, Component} from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { TodoApp }         from './components/todo.component';
import { TodoArticleComponent }  from './components/todo-article.component';
import { CompletedListComponent } from './components/completed-list.component';


@NgModule({
    declarations: [
        TodoApp,
        TodoArticleComponent,
        CompletedListComponent
    ],
    providers: [
    
  ],
    imports: [BrowserModule],
    bootstrap: [TodoApp]
})
 export class TodoAppModule { } 