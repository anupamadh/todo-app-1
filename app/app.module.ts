import { NgModule, Component} from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
// import { FormsModule }         from '@angular/forms';
import { TodoApp }         from './components/todo.component';
import { TodoArticleComponent }  from './components/todo-article.component';
import { ArticleService }         from './services/article.service';
import { BackendService }      from './services/backend.service';
import { CompletedListComponent } from './components/completed-list.component'
// import { Logger }              from './logger.service';

@NgModule({
    declarations: [
        TodoApp,
        TodoArticleComponent,
        CompletedListComponent
    ],
    providers: [
    BackendService,
    ArticleService
   
  ],
    imports: [BrowserModule],
    bootstrap: [TodoApp]
})
 export class TodoAppModule { } 