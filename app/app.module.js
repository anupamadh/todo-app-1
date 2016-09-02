System.register(["@angular/core", "@angular/platform-browser", './components/todo.component', './components/todo-article.component', './services/article.service', './services/backend.service', './components/completed-list.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, todo_component_1, todo_article_component_1, article_service_1, backend_service_1, completed_list_component_1;
    var TodoAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (todo_article_component_1_1) {
                todo_article_component_1 = todo_article_component_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (completed_list_component_1_1) {
                completed_list_component_1 = completed_list_component_1_1;
            }],
        execute: function() {
            // import { Logger }              from './logger.service';
            TodoAppModule = (function () {
                function TodoAppModule() {
                }
                TodoAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            todo_component_1.TodoApp,
                            todo_article_component_1.TodoArticleComponent,
                            completed_list_component_1.CompletedListComponent
                        ],
                        providers: [
                            backend_service_1.BackendService,
                            article_service_1.ArticleService
                        ],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [todo_component_1.TodoApp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoAppModule);
                return TodoAppModule;
            }());
            exports_1("TodoAppModule", TodoAppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map