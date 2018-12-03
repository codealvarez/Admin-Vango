(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pasajero-pasajero-module"],{

/***/ "./src/app/layout/pasajero/pasajero-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/pasajero/pasajero-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PasajeroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajeroRoutingModule", function() { return PasajeroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pasajero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pasajero.component */ "./src/app/layout/pasajero/pasajero.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pasajero_component__WEBPACK_IMPORTED_MODULE_2__["PasajeroComponent"]
    }];
var PasajeroRoutingModule = /** @class */ (function () {
    function PasajeroRoutingModule() {
    }
    PasajeroRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PasajeroRoutingModule);
    return PasajeroRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/pasajero/pasajero.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/pasajero/pasajero.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Ver pasajero'\" [icon]=\"'fa-map-signs'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Ver pasajero ({{idPasajero}})\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <div class=\"row\">\n                        <div class=\"col col-xl-6 col-lg-12\">\n                            <div class=\"alert alert-secondary\" role=\"alert\">\n                              Información del pasajero\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Nombres: <strong>{{nombre}}</strong></li>\n                                <li class=\"list-group-item\">Cédula: <strong>{{cedula}}</strong></li>\n                                <li class=\"list-group-item\">Clave de acceso: <strong>{{clave}}</strong></li>\n                                \n                                <li class=\"list-group-item\">Mail: <strong>{{mail}}</strong></li>\n\n                                <li class=\"list-group-item\">Estado: <strong>{{estado}}</strong></li>\n                            </ul>\n\n                            \n                        </div>\n                        <div class=\"col col-xl-6 col-lg-12\">\n                            <div class=\"alert alert-secondary\" role=\"alert\">\n                              Información de vinculación\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Grupo: <strong>{{grupo}}</strong></li>\n                                <li class=\"list-group-item\">Id Modipay: <strong>{{idmodipay}}</strong></li>\n                                <li class=\"list-group-item\">Id Vango: <strong>{{idvango}}</strong></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/pasajero/pasajero.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/pasajero/pasajero.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/pasajero/pasajero.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/pasajero/pasajero.component.ts ***!
  \*******************************************************/
/*! exports provided: PasajeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajeroComponent", function() { return PasajeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ws.service */ "./src/app/ws.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasajeroComponent = /** @class */ (function () {
    function PasajeroComponent(myService, activatedRoute) {
        this.myService = myService;
        this.activatedRoute = activatedRoute;
        var model = this;
        model.activatedRoute.params.subscribe(function (params) {
            model.idPasajero = params['idPasajero'];
            console.log(model.idPasajero);
        });
        model.myService.getPasajero(model.idPasajero).subscribe(function (res) {
            console.log('Respuesta de los detalles del pasajero: ' + model.idPasajero);
            console.log(res);
            model.cedula = res[0].cedula;
            model.clave = res[0].clave;
            model.estado = res[0].estado;
            model.grupo = res[0].grupo;
            model.idmodipay = res[0].idmodipay;
            model.idvango = res[0].idvango;
            model.mail = res[0].mail;
            model.nombre = res[0].nombre;
        }, function (error) {
            alert('Error obteniendo los detalles de la ruta');
        });
    }
    PasajeroComponent.prototype.ngOnInit = function () {
        var model = this;
    };
    PasajeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pasajero',
            template: __webpack_require__(/*! ./pasajero.component.html */ "./src/app/layout/pasajero/pasajero.component.html"),
            styles: [__webpack_require__(/*! ./pasajero.component.scss */ "./src/app/layout/pasajero/pasajero.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ws_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PasajeroComponent);
    return PasajeroComponent;
}());



/***/ }),

/***/ "./src/app/layout/pasajero/pasajero.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/pasajero/pasajero.module.ts ***!
  \****************************************************/
/*! exports provided: PasajeroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajeroModule", function() { return PasajeroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pasajero_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pasajero-routing.module */ "./src/app/layout/pasajero/pasajero-routing.module.ts");
/* harmony import */ var _pasajero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pasajero.component */ "./src/app/layout/pasajero/pasajero.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PasajeroModule = /** @class */ (function () {
    function PasajeroModule() {
    }
    PasajeroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pasajero_routing_module__WEBPACK_IMPORTED_MODULE_2__["PasajeroRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]
            ],
            declarations: [_pasajero_component__WEBPACK_IMPORTED_MODULE_3__["PasajeroComponent"]]
        })
    ], PasajeroModule);
    return PasajeroModule;
}());



/***/ })

}]);
//# sourceMappingURL=pasajero-pasajero-module.js.map