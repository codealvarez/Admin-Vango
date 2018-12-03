(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pasajeros-pasajeros-module"],{

/***/ "./src/app/layout/pasajeros/pasajeros-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/pasajeros/pasajeros-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PasajerosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajerosRoutingModule", function() { return PasajerosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pasajeros_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pasajeros.component */ "./src/app/layout/pasajeros/pasajeros.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pasajeros_component__WEBPACK_IMPORTED_MODULE_2__["PasajerosComponent"]
    }];
var PasajerosRoutingModule = /** @class */ (function () {
    function PasajerosRoutingModule() {
    }
    PasajerosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PasajerosRoutingModule);
    return PasajerosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/pasajeros/pasajeros.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/pasajeros/pasajeros.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Pasajeros'\" [icon]=\"'fa-map-signs'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Listado de pasajeros\n                    \n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Nombres</th>\n                            <th>Cédula</th>\n                            <th>Correo electrónico</th>\n                            <th>Acciones</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let pasajero of pasajeros\">\n                            <th scope=\"row\">{{pasajero.idpasajero}}</th>\n                            <td>{{pasajero.nombre}}</td>\n                            <td>{{pasajero.cedula}}</td>\n                            <td>{{pasajero.mail}}</td>\n                            <td><button class=\"btn btn-info\" [routerLink]=\"['/pasajero/'+pasajero.idpasajero]\">Ver detalles</button></td>\n                        </tr>\n                        \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/pasajeros/pasajeros.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/pasajeros/pasajeros.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/pasajeros/pasajeros.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/pasajeros/pasajeros.component.ts ***!
  \*********************************************************/
/*! exports provided: PasajerosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajerosComponent", function() { return PasajerosComponent; });
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




var PasajerosComponent = /** @class */ (function () {
    function PasajerosComponent(myService, activatedRoute) {
        this.myService = myService;
        this.activatedRoute = activatedRoute;
        var model = this;
        model.activatedRoute.params.subscribe(function (params) {
            model.idViaje = params['idViaje'];
            console.log(model.idViaje);
        });
    }
    PasajerosComponent.prototype.ngOnInit = function () {
        var model = this;
        if (model.idViaje) {
            console.log('Consultando viajes de ruta');
            model.obtenerPasajerosViaje();
        }
        else {
            console.log('Consultando todos');
            model.obtenerPasajerosTodos();
        }
    };
    PasajerosComponent.prototype.obtenerPasajerosTodos = function () {
        var model = this;
        model.myService.getPasajeros()
            .subscribe(function (result) {
            console.log('Listado de pasajeros');
            console.log(result);
            model.pasajeros = result;
            //this.onGetDataSuccess(result);
        }, function (error) {
            //this.onGetDataError(error);
        });
    };
    PasajerosComponent.prototype.obtenerPasajerosViaje = function () {
        var model = this;
        model.myService.getPasajerosViaje(model.idViaje)
            .subscribe(function (result) {
            console.log('Listado de pasajeros del viaje: ' + model.idViaje);
            console.log(result);
            model.pasajeros = result;
            //this.onGetDataSuccess(result);
        }, function (error) {
            //this.onGetDataError(error);
        });
    };
    PasajerosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pasajeros',
            template: __webpack_require__(/*! ./pasajeros.component.html */ "./src/app/layout/pasajeros/pasajeros.component.html"),
            styles: [__webpack_require__(/*! ./pasajeros.component.scss */ "./src/app/layout/pasajeros/pasajeros.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ws_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PasajerosComponent);
    return PasajerosComponent;
}());



/***/ }),

/***/ "./src/app/layout/pasajeros/pasajeros.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/pasajeros/pasajeros.module.ts ***!
  \******************************************************/
/*! exports provided: PasajerosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajerosModule", function() { return PasajerosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pasajeros_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pasajeros-routing.module */ "./src/app/layout/pasajeros/pasajeros-routing.module.ts");
/* harmony import */ var _pasajeros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pasajeros.component */ "./src/app/layout/pasajeros/pasajeros.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PasajerosModule = /** @class */ (function () {
    function PasajerosModule() {
    }
    PasajerosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pasajeros_routing_module__WEBPACK_IMPORTED_MODULE_2__["PasajerosRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]
            ],
            declarations: [_pasajeros_component__WEBPACK_IMPORTED_MODULE_3__["PasajerosComponent"]]
        })
    ], PasajerosModule);
    return PasajerosModule;
}());



/***/ })

}]);
//# sourceMappingURL=pasajeros-pasajeros-module.js.map