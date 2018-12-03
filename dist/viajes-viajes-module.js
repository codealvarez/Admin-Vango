(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viajes-viajes-module"],{

/***/ "./src/app/layout/viajes/viajes-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/viajes/viajes-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ViajesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViajesRoutingModule", function() { return ViajesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viajes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viajes.component */ "./src/app/layout/viajes/viajes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _viajes_component__WEBPACK_IMPORTED_MODULE_2__["ViajesComponent"]
    }
];
var ViajesRoutingModule = /** @class */ (function () {
    function ViajesRoutingModule() {
    }
    ViajesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ViajesRoutingModule);
    return ViajesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/viajes/viajes.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/viajes/viajes.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Viajes'\" [icon]=\"'fa-map-signs'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Listado de viajes\n                    <!-- <button class=\"btn btn-success pull-right\" [routerLink]=\"['/crearruta']\">Crear ruta</button> -->\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Ruta</th>\n                            <th>Fecha</th>\n                            <th>Hora</th>\n                            <th>Capacidad</th>\n                            <th>Disponibles</th>\n                            <th>Pasajeros</th>\n                            <th>Conductor</th>\n                            <th>Placa</th>\n                            <th>Precio</th>\n                            <th>Estado</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let viaje of viajes\">\n                            <th scope=\"row\">{{viaje.idviaje}}</th>\n                            <td><button [routerLink]=\"['/verruta/'+viaje.idruta]\" class=\"btn btn-info btn-sm\">{{viaje.nombreruta}}</button></td>\n                            <td>{{viaje.fecha_viaje}}</td>\n                            <td>{{viaje.hora_viaje}}</td>\n                            <td>{{viaje.capacidad}}</td>\n                            <td>{{viaje.disponibles}}</td>\n                            <td><button [routerLink]=\"['/pasajeros/'+viaje.idviaje]\" class=\"btn btn-success btn-sm\">{{viaje.reservados}}</button></td>\n                            <td>{{viaje.conductor}}</td>\n                            <td>{{viaje.placa}}</td>\n                            <td>{{viaje.precio}}</td>\n                            <td>{{viaje.estadoviaje}}</td>\n\n\n                        </tr>\n                        \n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/viajes/viajes.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/viajes/viajes.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/viajes/viajes.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/viajes/viajes.component.ts ***!
  \***************************************************/
/*! exports provided: ViajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViajesComponent", function() { return ViajesComponent; });
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




var ViajesComponent = /** @class */ (function () {
    function ViajesComponent(myService, activatedRoute) {
        this.myService = myService;
        this.activatedRoute = activatedRoute;
        var model = this;
        model.activatedRoute.params.subscribe(function (params) {
            model.idRuta = params['idRuta'];
            console.log(model.idRuta);
        });
    }
    ViajesComponent.prototype.ngOnInit = function () {
        var model = this;
        if (model.idRuta) {
            console.log('Consultando viajes de ruta');
            model.obtenerViajesRuta();
        }
        else {
            console.log('Consultando todos');
            model.obtenerViajesTodos();
        }
    };
    ViajesComponent.prototype.obtenerViajesRuta = function () {
        var model = this;
        model.myService.getViajesRuta(model.idRuta).subscribe(function (result) {
            model.viajes = result;
            for (var i = model.viajes.length - 1; i <= 0; i++) {
                model.viajes[i].reservados = parseInt(model.viajes[i].capacidad) - parseInt(model.viajes[i].disponibles);
            }
            console.log('Listado de viajes de ruta ' + model.idRuta);
            console.log(model.viajes);
            //this.onGetDataSuccess(result);
        }, function (error) {
            //this.onGetDataError(error);
        });
    };
    ViajesComponent.prototype.obtenerViajesTodos = function () {
        var model = this;
        model.myService.getViajesTodos().subscribe(function (result) {
            model.viajes = result;
            for (var i = 0; i < model.viajes.length; i++) {
                model.viajes[i].reservados = parseInt(model.viajes[i].capacidad) - parseInt(model.viajes[i].disponibles);
            }
            console.log('Listado de viajes');
            console.log(model.viajes);
            //this.onGetDataSuccess(result);
        }, function (error) {
            //this.onGetDataError(error);
        });
    };
    ViajesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viajes',
            template: __webpack_require__(/*! ./viajes.component.html */ "./src/app/layout/viajes/viajes.component.html"),
            styles: [__webpack_require__(/*! ./viajes.component.scss */ "./src/app/layout/viajes/viajes.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ws_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViajesComponent);
    return ViajesComponent;
}());



/***/ }),

/***/ "./src/app/layout/viajes/viajes.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/viajes/viajes.module.ts ***!
  \************************************************/
/*! exports provided: ViajesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViajesModule", function() { return ViajesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _viajes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viajes-routing.module */ "./src/app/layout/viajes/viajes-routing.module.ts");
/* harmony import */ var _viajes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viajes.component */ "./src/app/layout/viajes/viajes.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ViajesModule = /** @class */ (function () {
    function ViajesModule() {
    }
    ViajesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _viajes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViajesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_viajes_component__WEBPACK_IMPORTED_MODULE_3__["ViajesComponent"]]
        })
    ], ViajesModule);
    return ViajesModule;
}());



/***/ })

}]);
//# sourceMappingURL=viajes-viajes-module.js.map