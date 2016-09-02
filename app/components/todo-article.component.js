System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TodoArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoArticleComponent = (function () {
                function TodoArticleComponent() {
                }
                TodoArticleComponent.prototype.setCompleted = function (item, checked) {
                    item.completed = checked;
                };
                TodoArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-article',
                        inputs: ['item'],
                        host: { class: 'row' },
                        template: "\n<div class=\"twelve wide column\" *ngIf=\"item.completed===false\" #myElement>\n  <a class=\"ui large header\">\n        {{ item.title }}\n      </a>\n  <!-- right here -->\n  <div class=\"meta\"></div>\n  <ul class=\"ui big horizontal list voters\">\n    <input type=\"checkbox\" #chkbox [checked]=\"item.completed\" (click)=\"setCompleted(item, chkbox.checked)\">\n    <li class=\"item\">\n      {{item.completed ? 'Is Done' : 'Working on it' }}\n    </li>\n    <li class=\"item\">\n      <a (click)=\"myElement.remove()\"> x </a>\n    </li>\n  </ul>\n</div>\n" }), 
                    __metadata('design:paramtypes', [])
                ], TodoArticleComponent);
                return TodoArticleComponent;
            }());
            exports_1("TodoArticleComponent", TodoArticleComponent);
        }
    }
});
//# sourceMappingURL=todo-article.component.js.map