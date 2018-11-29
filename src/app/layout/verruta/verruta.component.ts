/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WebService } from "../../ws.service";
import { Router,ActivatedRoute, Params} from '@angular/router';
//import { } from '@types/googlemaps';

@Component({
  selector: 'app-verruta',
  templateUrl: './verruta.component.html',
  styleUrls: ['./verruta.component.scss'],
  animations: [routerTransition()]
})

export class VerrutaComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  idRuta:string;
  latitude:number=4.630399;
  longitude:number=-74.091343;
  latInicial:number;
  lonInicial:number;
  latFinal:number;
  lonFinal:number;

  paradas = [];

  //Detalles
  origen:string;
  destino:string;
  nombre:string;
  terminos:string;

  //Crear punto
  nombrePunto:string;
  direccionPunto:string;
  latitudPunto:number;
  longitudPunto:number;


  constructor(private myService: WebService,private activatedRoute: ActivatedRoute) {
  	//Obtener parámetros de URL
  	let model = this;
  	model.activatedRoute.params.subscribe((params: Params) => {
  		model.idRuta = params['idRuta'];
  		console.log(model.idRuta);
  	});
  }
  

  ngOnInit() {
  	let model = this;

  	//Pintar mapa
  	let mapProp = {
      center: new google.maps.LatLng(model.latitude,model.longitude),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    model.map = new google.maps.Map(model.gmapElement.nativeElement, mapProp);
    model.obtenerPuntosRuta();


	  

    model.myService.getDetallesRuta(model.idRuta).subscribe((res) => {
            
      console.log('Respuesta de los detalles de la ruta: '+model.idRuta);
      console.log(res);
      model.origen = res[0].origen;
      model.destino = res[0].destino;
      model.nombre = res[0].nombreruta;
      model.terminos = res[0].terminos; 
    }, (error) => {
      alert('Error obteniendo los detalles de la ruta');
    }); 

  }
  obtenerPuntosRuta(){
    let model = this;
    model.myService.getPuntosRuta(model.idRuta).subscribe((res) => {
      model.paradas=[];
      console.log('Respuesta de la ruta: '+model.idRuta);
      console.log(res);
      for(let i = 0; i <Object.keys(res).length; i++) {
          console.log('Detalle de punto');
          console.log(res[i]);
          if(res[i].tipo == 'INICIO'){

              model.latInicial = res[i].latitud*1;
              model.lonInicial = res[i].longitud*1;
              //centrar mapa en inicio de ruta
              model.latitude = res[i].latitud*1;
              model.longitude = res[i].longitud*1;

              model.map.setCenter(new google.maps.LatLng(model.latitude,model.longitude));

              let uluru = {lat: model.latitude, lng: model.longitude};
              let marker = new google.maps.Marker({position: uluru, map: model.map});
          }
          if(res[i].tipo == 'FIN'){
              model.latFinal = res[i].latitud*1;
              model.lonFinal = res[i].longitud*1;
              let uluru = {lat: model.latFinal, lng: model.lonFinal};
              let marker = new google.maps.Marker({position: uluru, map: model.map});
          }
          if(res[i].tipo == 'NORMAL'){
            //Array: lat,lon,idParada
            model.paradas.push(res[i]);
          }
      }
            
    }, (error) => {
      alert('Error obteniendo los puntos de la ruta');
    }); 
  }
  borrarParada(idParada){
    let model = this;
    if(confirm("Seguro de borrar la parada: "+idParada)) {
      model.myService.deleteParadaRuta(model.idRuta,idParada).subscribe((res:any) => {
            
        console.log('Respuesta de los detalles de la ruta: '+model.idRuta);
        console.log(res);
        if(res.resultado=="OK"){
          alert(res.mensaje);
          model.obtenerPuntosRuta();
        }
        
      }, (error) => {
        alert('Error obteniendo los detalles de la ruta');
      }); 
    }
    
  }
  agregarParada(){
    let model = this;
    if(model.nombrePunto && model.direccionPunto && model.latitudPunto && model.longitudPunto){
      model.myService.agregarParadaRuta(model.idRuta,model.nombrePunto,model.direccionPunto,model.latitudPunto,model.longitudPunto).subscribe((res:any) => {
            
        console.log('Respuesta de agregar punto a ruta: '+model.idRuta);
        console.log(res);
        if(res.resultado=="OK"){
          alert("Parada agregada exitosamente");
          model.obtenerPuntosRuta();
          model.nombrePunto='';
          model.direccionPunto='';
          model.latitudPunto=null;
          model.longitudPunto=null;
        }
      }, (error) => {
        alert('Error agregando punto a la ruta');
      }); 
    }else{
      alert('Debes completar todos los datos');
    }
  }
  ngAfterContentInit() {
    

  }

}
