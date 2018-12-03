import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WebService } from "../../ws.service";
import { Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.scss'],
  animations: [routerTransition()]
})
export class PasajerosComponent implements OnInit {
	public pasajeros:any;
	idViaje:string;
  	constructor(private myService: WebService,private activatedRoute: ActivatedRoute) {
  		let model = this;

	    model.activatedRoute.params.subscribe((params: Params) => {
	      model.idViaje = params['idViaje'];
	      console.log(model.idViaje);
	    });
  	}

	ngOnInit() {
		let model = this;
	    if(model.idViaje){
	      console.log('Consultando viajes de ruta');
	      model.obtenerPasajerosViaje();
	    }else{
	      console.log('Consultando todos');
	      model.obtenerPasajerosTodos();
	    }
		

	}
	obtenerPasajerosTodos(){
		let model = this;
		model.myService.getPasajeros()
	        .subscribe((result:any) => {
	        	console.log('Listado de pasajeros');
	        	console.log(result);
	        	model.pasajeros = result;
	            //this.onGetDataSuccess(result);
	        }, (error) => {
	            //this.onGetDataError(error);
	        });
	}

	obtenerPasajerosViaje(){
		let model = this;
		model.myService.getPasajerosViaje(model.idViaje)
	        .subscribe((result:any) => {
	        	console.log('Listado de pasajeros del viaje: '+model.idViaje);
	        	console.log(result);
	        	model.pasajeros = result;
	            //this.onGetDataSuccess(result);
	        }, (error) => {
	            //this.onGetDataError(error);
	        });
	}

}
