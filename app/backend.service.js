System.register(['@angular/core', './article'], function(exports_1, context_1) {
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
    var core_1, article_1;
    var ARTICLES, BackendService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            ARTICLES = [
                new article_1.Article('Angular 2', 'http://angular.io', 3),
                new article_1.Article('Fullstack', 'http://fullstack.io', 2),
                new article_1.Article('Angular Homepage', 'http://angular.io', 1)
            ];
            BackendService = (function () {
                function BackendService() {
                }
                BackendService.prototype.getAll = function (type) {
                    if (type === article_1.Article) {
                        // TODO get from the database
                        return Promise.resolve(ARTICLES);
                    }
                    var err = new Error('Cannot get object of this type');
                    // this.logger.error(err);
                    throw err;
                };
                BackendService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BackendService);
                return BackendService;
            }());
            exports_1("BackendService", BackendService);
        }
    }
});
//# sourceMappingURL=backend.service.js.map