System.register(['@angular/core', '../item', './backend.service'], function(exports_1, context_1) {
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
    var core_1, item_1, backend_service_1;
    var ArticleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            }],
        execute: function() {
            // import { Logger } from './logger.service';
            ArticleService = (function () {
                function ArticleService(backend) {
                    this.backend = backend;
                    this.articlearr = [];
                }
                ArticleService.prototype.getArticles = function () {
                    var _this = this;
                    this.backend.getAll(item_1.Item).then(function (articles) {
                        // this.logger.log(`Fetched ${articles.length} articles.`);
                        (_a = _this.articlearr).push.apply(_a, articles); // fill cache
                        var _a;
                    });
                    return this.articlearr;
                };
                ArticleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [backend_service_1.BackendService])
                ], ArticleService);
                return ArticleService;
            }());
            exports_1("ArticleService", ArticleService);
        }
    }
});
//# sourceMappingURL=article.service.js.map