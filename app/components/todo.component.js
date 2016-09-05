System.register(['../item', '@angular/core', '../services/article.service'], function(exports_1, context_1) {
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
    var item_1, core_1, article_service_1;
    var TodoApp;
    return {
        setters:[
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            TodoApp = (function () {
                // constructor(private _articleService: ArticleService){
                // }
                function TodoApp() {
                    this.items = [];
                }
                TodoApp.prototype.addItem = function (title) {
                    console.log("Adding article title: " + title.value);
                    this.items.push(new item_1.Item(title.value, false));
                    title.value = '';
                };
                TodoApp = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        templateUrl: 'app/components/views/todo.html',
                        providers: [article_service_1.ArticleService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoApp);
                return TodoApp;
            }());
            exports_1("TodoApp", TodoApp);
        }
    }
});
//# sourceMappingURL=todo.component.js.map