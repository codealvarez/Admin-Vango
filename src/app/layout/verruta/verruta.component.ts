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
  latitude:number=4.630399;
  longitude:number=-74.091343;
  latInicial:number;
  lonInicial:number;
  latFinal:number;
  lonFinal:number;

  paradas = [];

  constructor(private myService: WebService,private activatedRoute: ActivatedRoute) {
  	//Obtener parámetros de URL
  	let model = this;
  	model.activatedRoute.params.subscribe((params: Params) => {
		model.idRuta = params['idRuta'];
		console.log(model.idRuta);
	});
  }
  idRuta:string;

  ngOnInit() {
  	let model = this;

  	//Pintar mapa
  	let mapProp = {
      center: new google.maps.LatLng(model.latitude,model.longitude),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    model.map = new google.maps.Map(model.gmapElement.nativeElement, mapProp);



	model.myService.getPuntosRuta(model.idRuta).subscribe((res) => {
            
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
                    //model.paradas.push([Position.positionFromLatLng(res[i].latitud,res[i].longitud),res[i].idparada]); 
                }
            }
            
    }, (error) => {

    }); 
  }
  ngAfterContentInit() {
    

  }

}
