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
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.setCompleted = function (article, checked) {
                    article.completed = checked;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        host: { class: 'row' },
                        template: "\n<div class=\"twelve wide column\" *ngIf=\"article.completed===false\" #myElement>\n  <a class=\"ui large header\" href=\"{{ article.link }}\">\n        {{ article.title }}\n      </a>\n  <!-- right here -->\n  <div class=\"meta\"></div>\n  <ul class=\"ui big horizontal list voters\">\n    <input type=\"checkbox\" #chkbox [checked]=\"article.completed\" (click)=\"setCompleted(article, chkbox.checked)\">\n    <li class=\"item\">\n      {{article.completed ? 'Is Done' : 'Working on it' }}\n    </li>\n    <li class=\"item\">\n      <a (click)=\"myElement.remove()\"> x </a>\n    </li>\n  </ul>\n</div>\n" }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=reddit-article.component.js.map