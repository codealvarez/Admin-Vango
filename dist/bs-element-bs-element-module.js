(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bs-element-bs-element-module"],{

/***/ "./src/app/layout/bs-element/bs-element-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BsElementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementRoutingModule", function() { return BsElementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bs_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-element.component */ "./src/app/layout/bs-element/bs-element.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bs_element_component__WEBPACK_IMPORTED_MODULE_2__["BsElementComponent"]
    }
];
var BsElementRoutingModule = /** @class */ (function () {
    function BsElementRoutingModule() {
    }
    BsElementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BsElementRoutingModule);
    return BsElementRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Pasajeros'\" [icon]=\"'fa-desktop'\"></app-page-header>\r\n    <!-- Main jumbotron for a primary marketing message or call to action -->\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Listado de pasajeros\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Nombre</th>\r\n                            <th>Identificación</th>\r\n                            <th>Estado</th>\r\n                            <th>Acciones</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <p class=\"text-center\">Error obteniendo pasajeros</p>\r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.ts ***!
  \***********************************************************/
/*! exports provided: BsElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementComponent", function() { return BsElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsElementComponent = /** @class */ (function () {
    function BsElementComponent() {
    }
    BsElementComponent.prototype.ngOnInit = function () { };
    BsElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bs-element',
            template: __webpack_require__(/*! ./bs-element.component.html */ "./src/app/layout/bs-element/bs-element.component.html"),
            styles: [__webpack_require__(/*! ./bs-element.component.scss */ "./src/app/layout/bs-element/bs-element.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], BsElementComponent);
    return BsElementComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.module.ts ***!
  \********************************************************/
/*! exports provided: BsElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementModule", function() { return BsElementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bs_element_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-element-routing.module */ "./src/app/layout/bs-element/bs-element-routing.module.ts");
/* harmony import */ var _bs_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs-element.component */ "./src/app/layout/bs-element/bs-element.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BsElementModule = /** @class */ (function () {
    function BsElementModule() {
    }
    BsElementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bs_element_routing_module__WEBPACK_IMPORTED_MODULE_2__["BsElementRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_bs_element_component__WEBPACK_IMPORTED_MODULE_3__["BsElementComponent"]]
        })
    ], BsElementModule);
    return BsElementModule;
}());



/***/ })

}]);
//# sourceMappingURL=bs-element-bs-element-module.js.map