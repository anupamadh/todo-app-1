import { NgModule, Component} from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
// import { FormsModule }         from '@angular/forms';
import { RedditApp }         from './reddit.component';
import { ArticleComponent }  from './reddit-article.component';
import { ArticleService }         from './article.service';
import { BackendService }      from './backend.service';
import { Logger }              from './logger.service';

@NgModule({
    declarations: [
        RedditApp,
        ArticleComponent
    ],
    providers: [
    BackendService,
    ArticleService,
    Logger
  ],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})
 export class RedditAppModule { } 