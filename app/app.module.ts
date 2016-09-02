import { NgModule, Component} from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
// import { FormsModule }         from '@angular/forms';
import { RedditApp }         from './components/reddit.component';
import { ArticleComponent }  from './components/reddit-article.component';
import { ArticleService }         from './services/article.service';
import { BackendService }      from './services/backend.service';
import { CompletedListComponent } from './components/completed-list.component'
// import { Logger }              from './logger.service';

@NgModule({
    declarations: [
        RedditApp,
        ArticleComponent,
        CompletedListComponent
    ],
    providers: [
    BackendService,
    ArticleService
   
  ],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})
 export class RedditAppModule { } 