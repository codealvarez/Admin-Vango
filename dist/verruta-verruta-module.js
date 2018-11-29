(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verruta-verruta-module"],{

/***/ "./src/app/layout/verruta/verruta-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/verruta/verruta-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: VerrutaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerrutaRoutingModule", function() { return VerrutaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _verruta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verruta.component */ "./src/app/layout/verruta/verruta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _verruta_component__WEBPACK_IMPORTED_MODULE_2__["VerrutaComponent"]
    }
];
var VerrutaRoutingModule = /** @class */ (function () {
    function VerrutaRoutingModule() {
    }
    VerrutaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VerrutaRoutingModule);
    return VerrutaRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/verruta/verruta.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/verruta/verruta.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Ver ruta'\" [icon]=\"'fa-map-signs'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Ver ruta ({{idRuta}}) - {{nombre}}\n                    <!-- <button class=\"btn btn-success pull-right\" (click)=\"guardar()\">Guardar ruta</button> -->\n                    <button class=\"btn btn-success pull-right\" [routerLink]=\"['/viajes/'+idRuta]\">Ver viajes</button>\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <div class=\"row\">\n                        <div class=\"col col-xl-6 col-lg-12\">\n                            <div class=\"alert alert-secondary\" role=\"alert\">\n                              Información de la ruta\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Origen: <strong>{{origen}}</strong></li>\n                                <li class=\"list-group-item\">Destino: <strong>{{destino}}</strong></li>\n                                <li class=\"list-group-item\">Términos de búsqueda: <strong>{{terminos}}</strong></li>\n                            </ul>\n\n                            <div class=\"alert alert-secondary\" role=\"alert\">\n                              Inicio de la ruta\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Lugar: <strong>{{origen}}</strong></li>\n                                <li class=\"list-group-item\">Latitud: <strong>{{latInicial}}</strong></li>\n                                <li class=\"list-group-item\">Longitud: <strong>{{lonInicial}}</strong></li>\n                            </ul>\n\n                            <div class=\"alert alert-secondary\" role=\"alert\">\n                              Fin de la ruta\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Lugar: <strong>{{destino}}</strong></li>\n                                <li class=\"list-group-item\">Latitud: <strong>{{latFinal}}</strong></li>\n                                <li class=\"list-group-item\">Longitud: <strong>{{lonFinal}}</strong></li>\n                            </ul>\n                        </div>\n                        <div class=\"col col-xl-6 col-lg-12\">\n                            <div class=\"alert alert-secondary\" role=\"alert\">\n                              Previsualización de la ruta\n                            </div>\n                        \t<div #gmap style=\"width:100%;height:400px\"></div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col col-xl-12 col-lg-12\">\n                            <div id=\"contPuntos\">\n                                <div class=\"alert alert-secondary\" role=\"alert\">\n                                  Puntos de la ruta\n                                </div>\n                                <table class=\"table table-striped\">\n                                  <thead>\n                                    <tr>\n                                      <th scope=\"col\">#</th>\n                                      <th scope=\"col\">Nombre</th>\n                                      <th scope=\"col\">Dirección</th>\n                                      <th scope=\"col\">Latitud</th>\n                                      <th scope=\"col\">Longitud</th>\n                                      <th scope=\"col\">Acciones</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let item of paradas\">\n                                      <th scope=\"row\">{{item.idparada}}</th>\n                                      <td>{{item.nombre}}</td>\n                                      <td>{{item.direccion}}</td>\n                                      <td>{{item.latitud}}</td>\n                                      <td>{{item.longitud}}</td>\n                                      <td><button (click)=\"borrarParada(item.idparada)\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash\"></i></button></td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                                <form role=\"form\">\n                                  <div class=\"form-row\">\n                                    <div class=\"col\">\n                                      <input [(ngModel)]=\"nombrePunto\" id=\"nombrePunto\" name=\"nombrePunto\" type=\"text\" class=\"form-control\" placeholder=\"Nombre\" required>\n                                    </div>\n                                    <div class=\"col\">\n                                      <input [(ngModel)]=\"direccionPunto\" id=\"direccionPunto\" name=\"direccionPunto\" type=\"text\" class=\"form-control\" placeholder=\"Dirección\" required>\n                                    </div>\n                                    <div class=\"col\">\n                                      <input [(ngModel)]=\"latitudPunto\" id=\"latitudPunto\" name=\"latitudPunto\" type=\"text\" class=\"form-control\" placeholder=\"Latitud\" required>\n                                    </div>\n                                    <div class=\"col\">\n                                      <input [(ngModel)]=\"longitudPunto\" id=\"longitudPunto\" name=\"longitudPunto\" type=\"text\" class=\"form-control\" placeholder=\"Longitud\" required>\n                                    </div>\n                                  </div>\n                                  <button (click)=\"agregarParada()\" class=\"btn btn-primary pull-right mt-1\">Agregar parada</button>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/verruta/verruta.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/verruta/verruta.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/verruta/verruta.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/verruta/verruta.component.ts ***!
  \*****************************************************/
/*! exports provided: VerrutaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerrutaComponent", function() { return VerrutaComponent; });
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
/// <reference types="@types/googlemaps" />




//import { } from '@types/googlemaps';
var VerrutaComponent = /** @class */ (function () {
    function VerrutaComponent(myService, activatedRoute) {
        this.myService = myService;
        this.activatedRoute = activatedRoute;
        this.latitude = 4.630399;
        this.longitude = -74.091343;
        this.paradas = [];
        //Obtener parámetros de URL
        var model = this;
        model.activatedRoute.params.subscribe(function (params) {
            model.idRuta = params['idRuta'];
            console.log(model.idRuta);
        });
    }
    VerrutaComponent.prototype.ngOnInit = function () {
        var model = this;
        //Pintar mapa
        var mapProp = {
            center: new google.maps.LatLng(model.latitude, model.longitude),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        model.map = new google.maps.Map(model.gmapElement.nativeElement, mapProp);
        model.obtenerPuntosRuta();
        model.myService.getDetallesRuta(model.idRuta).subscribe(function (res) {
            console.log('Respuesta de los detalles de la ruta: ' + model.idRuta);
            console.log(res);
            model.origen = res[0].origen;
            model.destino = res[0].destino;
            model.nombre = res[0].nombreruta;
            model.terminos = res[0].terminos;
        }, function (error) {
            alert('Error obteniendo los detalles de la ruta');
        });
    };
    VerrutaComponent.prototype.obtenerPuntosRuta = function () {
        var model = this;
        model.myService.getPuntosRuta(model.idRuta).subscribe(function (res) {
            model.paradas = [];
            console.log('Respuesta de la ruta: ' + model.idRuta);
            console.log(res);
            for (var i = 0; i < Object.keys(res).length; i++) {
                console.log('Detalle de punto');
                console.log(res[i]);
                if (res[i].tipo == 'INICIO') {
                    model.latInicial = res[i].latitud * 1;
                    model.lonInicial = res[i].longitud * 1;
                    //centrar mapa en inicio de ruta
                    model.latitude = res[i].latitud * 1;
                    model.longitude = res[i].longitud * 1;
                    model.map.setCenter(new google.maps.LatLng(model.latitude, model.longitude));
                    var uluru = { lat: model.latitude, lng: model.longitude };
                    var marker = new google.maps.Marker({ position: uluru, map: model.map });
                }
                if (res[i].tipo == 'FIN') {
                    model.latFinal = res[i].latitud * 1;
                    model.lonFinal = res[i].longitud * 1;
                    var uluru = { lat: model.latFinal, lng: model.lonFinal };
                    var marker = new google.maps.Marker({ position: uluru, map: model.map });
                }
                if (res[i].tipo == 'NORMAL') {
                    //Array: lat,lon,idParada
                    model.paradas.push(res[i]);
                }
            }
        }, function (error) {
            alert('Error obteniendo los puntos de la ruta');
        });
    };
    VerrutaComponent.prototype.borrarParada = function (idParada) {
        var model = this;
        if (confirm("Seguro de borrar la parada: " + idParada)) {
            model.myService.deleteParadaRuta(model.idRuta, idParada).subscribe(function (res) {
                console.log('Respuesta de los detalles de la ruta: ' + model.idRuta);
                console.log(res);
                if (res.resultado == "OK") {
                    alert(res.mensaje);
                    model.obtenerPuntosRuta();
                }
            }, function (error) {
                alert('Error obteniendo los detalles de la ruta');
            });
        }
    };
    VerrutaComponent.prototype.agregarParada = function () {
        var model = this;
        if (model.nombrePunto && model.direccionPunto && model.latitudPunto && model.longitudPunto) {
            model.myService.agregarParadaRuta(model.idRuta, model.nombrePunto, model.direccionPunto, model.latitudPunto, model.longitudPunto).subscribe(function (res) {
                console.log('Respuesta de agregar punto a ruta: ' + model.idRuta);
                console.log(res);
                if (res.resultado == "OK") {
                    alert("Parada agregada exitosamente");
                    model.obtenerPuntosRuta();
                    model.nombrePunto = '';
                    model.direccionPunto = '';
                    model.latitudPunto = null;
                    model.longitudPunto = null;
                }
            }, function (error) {
                alert('Error agregando punto a la ruta');
            });
        }
        else {
            alert('Debes completar todos los datos');
        }
    };
    VerrutaComponent.prototype.ngAfterContentInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], VerrutaComponent.prototype, "gmapElement", void 0);
    VerrutaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verruta',
            template: __webpack_require__(/*! ./verruta.component.html */ "./src/app/layout/verruta/verruta.component.html"),
            styles: [__webpack_require__(/*! ./verruta.component.scss */ "./src/app/layout/verruta/verruta.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ws_service__WEBPACK_IMPORTED_MODULE_2__["WebService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], VerrutaComponent);
    return VerrutaComponent;
}());



/***/ }),

/***/ "./src/app/layout/verruta/verruta.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/verruta/verruta.module.ts ***!
  \**************************************************/
/*! exports provided: VerrutaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerrutaModule", function() { return VerrutaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _verruta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verruta-routing.module */ "./src/app/layout/verruta/verruta-routing.module.ts");
/* harmony import */ var _verruta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verruta.component */ "./src/app/layout/verruta/verruta.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VerrutaModule = /** @class */ (function () {
    function VerrutaModule() {
    }
    VerrutaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _verruta_routing_module__WEBPACK_IMPORTED_MODULE_3__["VerrutaRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_verruta_component__WEBPACK_IMPORTED_MODULE_4__["VerrutaComponent"]]
        })
    ], VerrutaModule);
    return VerrutaModule;
}());



/***/ })

}]);
//# sourceMappingURL=verruta-verruta-module.js.map