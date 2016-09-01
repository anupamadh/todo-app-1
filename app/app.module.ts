import { NgModule, Component
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RedditApp } from './reddit.component';
import { ArticleComponent } from './reddit-article.component';

@NgModule({
    declarations: [
        RedditApp,
        ArticleComponent
    ],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})
 export class RedditAppModule { } 