System.register(['@angular/core', '../item'], function(exports_1, context_1) {
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
    var core_1, item_1;
    var ITEMS, BackendService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            }],
        execute: function() {
            ITEMS = [
                new item_1.Item('Finish assignment on nodejs', false),
                new item_1.Item('Start final project', false),
                new item_1.Item('Add styling to previous project', false)
            ];
            BackendService = (function () {
                function BackendService() {
                }
                BackendService.prototype.getAll = function (type) {
                    if (type === item_1.Item) {
                        // TODO get from the database
                        return Promise.resolve(ITEMS);
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