(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conductores-conductores-module"],{

/***/ "./src/app/layout/conductores/conductores-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/conductores/conductores-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ConductoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductoresRoutingModule", function() { return ConductoresRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _conductores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conductores.component */ "./src/app/layout/conductores/conductores.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _conductores_component__WEBPACK_IMPORTED_MODULE_2__["ConductoresComponent"]
    }
];
var ConductoresRoutingModule = /** @class */ (function () {
    function ConductoresRoutingModule() {
    }
    ConductoresRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConductoresRoutingModule);
    return ConductoresRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/conductores/conductores.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/conductores/conductores.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Conductores'\" [icon]=\"'fa-map-signs'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Listado de conductores\n                    <!-- <button class=\"btn btn-success pull-right\" [routerLink]=\"['/crearruta']\">Crear ruta</button> -->\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Nombre</th>\n                            <th>Cédula</th>\n                            <th>Celular</th>\n                            <th>Placa</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let conductor of conductores\">\n                            <th scope=\"row\">{{conductor.idconductor}}</th>\n                            <td>{{conductor.nombre}}</td>\n                            <td>{{conductor.cedula}}</td>\n                            <td>{{conductor.celular}}</td>\n                            <td><button [routerLink]=\"['/conductores/'+conductor.placa]\" class=\"btn btn-info btn-sm\">{{conductor.placa}}</button></td>\n\n                        </tr>\n                        \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/conductores/conductores.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/conductores/conductores.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/conductores/conductores.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/conductores/conductores.component.ts ***!
  \*************************************************************/
/*! exports provided: ConductoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductoresComponent", function() { return ConductoresComponent; });
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




var ConductoresComponent = /** @class */ (function () {
    function ConductoresComponent(myService, activatedRoute) {
        this.myService = myService;
        this.activatedRoute = activatedRoute;
        var model = this;
        model.activatedRoute.params.subscribe(function (params) {
            model.placa = params['placa'];
            console.log(model.placa);
        });
    }
    ConductoresComponent.prototype.ngOnInit = function () {
        var model = this;
        if (model.placa) {
            console.log('Consultando viajes de ruta');
            model.obtenerConductoresPlaca();
        }
        else {
            console.log('Consultando todos');
            model.obtenerConductoresTodos();
        }
    };
    ConductoresComponent.prototype.obtenerConductoresPlaca = function () {
        var model = this;
        model.myService.getConductoresPlaca(model.placa).subscribe(function (result) {
            console.log('Listado de conductores de la placa ' + model.placa);
            console.log(result);
            model.conductores = result;
            //this.onGetDataSuccess(result);
        }, function (error) {
            //this.onGetDataError(error);
        });
    };
    ConductoresComponent.prototype.obtenerConductoresTodos = function () {
        var model = this;
        model.myService.getConductores().subscribe(function (result) {
            console.log('Listado de conductores');
            console.log(result);
            model.conductores = result;
            //this.onGetDataSuccess(result);
        }, function (error) {
            //this.onGetDataError(error);
        });
    };
    ConductoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conductores',
            template: __webpack_require__(/*! ./conductores.component.html */ "./src/app/layout/conductores/conductores.component.html"),
            styles: [__webpack_require__(/*! ./conductores.component.scss */ "./src/app/layout/conductores/conductores.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ws_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConductoresComponent);
    return ConductoresComponent;
}());



/***/ }),

/***/ "./src/app/layout/conductores/conductores.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/conductores/conductores.module.ts ***!
  \**********************************************************/
/*! exports provided: ConductoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductoresModule", function() { return ConductoresModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _conductores_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conductores-routing.module */ "./src/app/layout/conductores/conductores-routing.module.ts");
/* harmony import */ var _conductores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conductores.component */ "./src/app/layout/conductores/conductores.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConductoresModule = /** @class */ (function () {
    function ConductoresModule() {
    }
    ConductoresModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _conductores_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConductoresRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]
            ],
            declarations: [_conductores_component__WEBPACK_IMPORTED_MODULE_3__["ConductoresComponent"]]
        })
    ], ConductoresModule);
    return ConductoresModule;
}());



/***/ })

}]);
//# sourceMappingURL=conductores-conductores-module.js.map