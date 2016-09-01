System.register(['./article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var article_1;
    var ARTICLES;
    return {
        setters:[
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            exports_1("ARTICLES", ARTICLES = [
                new article_1.Article('Angular 2', 'http://angular.io', 3),
                new article_1.Article('Fullstack', 'http://fullstack.io', 2),
                new article_1.Article('Angular Homepage', 'http://angular.io', 1)
            ]);
        }
    }
});
//# sourceMappingURL=mock-article.js.map