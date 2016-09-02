System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                function Article(title, completed) {
                    if (completed === void 0) { completed = false; }
                    this.title = title;
                    this.completed = completed;
                }
                return Article;
            }());
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article.js.map