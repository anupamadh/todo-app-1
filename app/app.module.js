System.register(["@angular/core", "@angular/platform-browser", './reddit.component', './reddit-article.component', './article.service', './backend.service', './logger.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, reddit_component_1, reddit_article_component_1, article_service_1, backend_service_1, logger_service_1;
    var RedditAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (reddit_component_1_1) {
                reddit_component_1 = reddit_component_1_1;
            },
            function (reddit_article_component_1_1) {
                reddit_article_component_1 = reddit_article_component_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            RedditAppModule = (function () {
                function RedditAppModule() {
                }
                RedditAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            reddit_component_1.RedditApp,
                            reddit_article_component_1.ArticleComponent
                        ],
                        providers: [
                            backend_service_1.BackendService,
                            article_service_1.ArticleService,
                            logger_service_1.Logger
                        ],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [reddit_component_1.RedditApp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditAppModule);
                return RedditAppModule;
            }());
            exports_1("RedditAppModule", RedditAppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map