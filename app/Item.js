System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Item;
    return {
        setters:[],
        execute: function() {
            Item = (function () {
                function Item(title, completed) {
                    if (completed === void 0) { completed = false; }
                    this.title = title;
                    this.completed = completed;
                }
                return Item;
            }());
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=Item.js.map