import { Injectable } from "@angular/core";
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
/*import * as pl from 'google-polyline';
import * as platform from "platform";*/
/*import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";*/ 

@Injectable()
export class WebService {
    
    constructor(private http: HttpClient) { }

    getData(lat,lon,lat2,lon2,paradas) {
        var key = 'AIzaSyD-eKkwCJy0RbyZXBQSOxIWwY6U89Q1uU0';
        var waypoints = '';
        var coma = '%2C';
        var barra = '%7C';

        for(let i = 0; i < paradas.length; i++){
            if(paradas.length == (i-1)){
                waypoints += 'via:'+paradas[i][0].latitude+coma+paradas[i][0].longitude;
            }else{
                waypoints += 'via:'+paradas[i][0].latitude+coma+paradas[i][0].longitude+barra;    
            }
            
            //let waysDec = pl.encode([paradas[i][0],paradas[i][1]]);
            //console.log('Punto '+(i+1)+':'+[paradas[i][0],paradas[i][1]+' -- '+waysDec);
            console.log(JSON.stringify(paradas[i]));
            
        }
         
        var serverUrl = "https://maps.googleapis.com/maps/api/directions/json?origin="+lat+","+lon+"&destination="+lat2+","+lon2+"&waypoints="+waypoints+"&key="+key;
        //var serverUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=4.7014128,-74.1466856&destination=4.6765584,-74.0536666&waypoints=via:Ricaurte,Bogot%C3%A1&key=AIzaSyD-eKkwCJy0RbyZXBQSOxIWwY6U89Q1uU0";
        console.log('Recibidos - Lat:'+lat+' - Lon: '+lon);
        console.log('URL: '+serverUrl);
        let headers = this.createRequestHeader();
        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    } 

    getLogin(user,password) { 
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/valida_login_plataforma.aspx";
        
        console.log('Recibidos - User:'+user+' - Pass: '+password);
        let headers = this.createRequestHeader();
        /*return this.http.get(serverUrl)
            .map(res => res); */

        return this.http.get(serverUrl, { params:{ codigousu:user, claveusu:password} })
            .pipe(map(res => res));
    }
    crearRuta(nombre,origen,destino,terminos,latI,lonI,latF,lonF) { 
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/agregar_ruta.aspx";
        
        console.log('Recibidos - nombre:'+nombre+' - Origen: '+origen+' - Destino: '+destino+' - Terminos: '+terminos);
        let headers = this.createRequestHeader();
        /*return this.http.get(serverUrl)
            .map(res => res); */

        return this.http.get(serverUrl, { params:{ nombreruta:nombre, terminos:terminos, origen:origen, destino:destino,latorigen:latI,lonorigen:lonI,latdestino:latF,londestino:lonF} })
            .pipe(map(res => res));
    }

    agregarPuntoRuta(idRuta,nombre,direccion,tipo,latitud,longitud) { 
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/agregar_parada_ruta.aspx";
        
        console.log('Recibidos - idRuta:'+idRuta+' - nombre: '+nombre+' - direccion: '+direccion+' - tipo: '+tipo+' - latitud: '+latitud+' - '+longitud);
        let headers = this.createRequestHeader();
        /*return this.http.get(serverUrl)
            .map(res => res); */

        return this.http.get(serverUrl, { params:{ idruta:idRuta, nombre:nombre, direccion:direccion, tipo:tipo, orden:'0',latitud:latitud,longitud:longitud} })
            .pipe(map(res => res));
    }

    getPuntosRuta(idRuta) { 
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/traer_paraderos_ruta.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ idruta:idRuta}, headers: headers })
            .pipe(map(res => res));
    }

    getDetallesRuta(idRuta) { 
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_rutas_todas.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ idruta:idRuta}, headers: headers })
            .pipe(map(res => res));
    }

    
    getRutasDisponibles(idUsuario) { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_rutas_disponibles.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }
    agregarParadaRuta(idRuta,nombre,direccion,latitud,longitud){
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/agregar_parada_ruta.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ 
            idruta:idRuta, 
            nombre:nombre,
            direccion:direccion,
            latitud:latitud,
            longitud:longitud,
            tipo:'NORMAL'
        }, headers: headers })
            .pipe(map(res => res));
    }
    deleteParadaRuta(idRuta,idParada){
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/eliminar_parada_ruta.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ idruta:idRuta, idparada:idParada}, headers: headers })
            .pipe(map(res => res));
    }

    getViajesRuta(idRuta) { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_viajes_rutas.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ idruta:idRuta, estado:'TODOS'}, headers: headers })
            .pipe(map(res => res));
    }

    getViajesTodos() { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_viajes_rutas.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    getConductores() { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_conductores_placa.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    getConductoresPlaca(placa) { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_conductores_placa.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ placa:placa}, headers: headers })
            .pipe(map(res => res));
    }

    getPasajeros() { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_pasajeros.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    getPasajero(idPasajero) { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_pasajeros.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{idpasajero:idPasajero},headers: headers })
            .pipe(map(res => res));
    }

    getPasajerosViaje(idViaje) { 
        //listar_viajes_rutas.aspx?idconductor=0&idpasajero=2&estado=PROGRAMADO
        var serverUrl = "http://ctcarpoolimp.cloudapp.net/carpoolservices/listar_pasajeros.aspx";
        
        let headers = this.createRequestHeader();

        return this.http.get(serverUrl, { params:{ idviaje:idViaje}, headers: headers })
            .pipe(map(res => res));
    }


    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            //"Content-Type": "application/json",
         });

        return headers;
    }
}