System.register(['../article', '@angular/core', '../services/article.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var article_1, core_1, article_service_1;
    var RedditApp;
    return {
        setters:[
            function (article_1_1) {
                article_1 = article_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp(_articleService) {
                    this._articleService = _articleService;
                }
                // constructor() {
                //     this.articles = [
                //         new Article('Angular 2', 'http://angular.io', 3),
                //         new Article('Fullstack', 'http://fullstack.io', 2),
                //         new Article('Angular Homepage', 'http://angular.io', 1),
                //     ];
                // }
                RedditApp.prototype.addArticle = function (title) {
                    console.log("Adding article title: " + title.value);
                    this.articles.push(new article_1.Article(title.value, false, 0));
                    title.value = '';
                };
                RedditApp.prototype.sortedArticles = function () {
                    console.log("this.articles: ", this.articles);
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp.prototype.ngOnInit = function () {
                    this.articles = this._articleService.getArticles();
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\n    <form class=\"ui large form segment\">\n      <h3 class=\"ui header\">Add a Link</h3>\n      <div class=\"field\">\n        <label for=\"title\">Title:</label>\n        <input name=\"title\" #newtitle>  <!-- changed -->\n      </div>\n  \n      <!-- added this button -->\n      <button type =\"button\" (click)=\"addArticle(newtitle)\"\n              class=\"ui positive right floated button\">\n        Submit link\n      </button>\n    </form>\n    <div class=\"ui grid posts\">\n  <reddit-article *ngFor = \"let foobar of sortedArticles()\" [article] = \"foobar\">\n  </reddit-article>\n \n</div>\n",
                        providers: [article_service_1.ArticleService]
                    }), 
                    __metadata('design:paramtypes', [article_service_1.ArticleService])
                ], RedditApp);
                return RedditApp;
            }());
            exports_1("RedditApp", RedditApp);
        }
    }
});
//# sourceMappingURL=reddit.component.js.map