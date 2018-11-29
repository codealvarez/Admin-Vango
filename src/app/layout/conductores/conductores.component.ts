import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WebService } from "../../ws.service";
import { Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss'],
  animations: [routerTransition()]
})
export class ConductoresComponent implements OnInit {
	public conductores:any;
	placa:string;
	constructor(private myService: WebService,private activatedRoute: ActivatedRoute) {
		let model = this;
	    model.activatedRoute.params.subscribe((params: Params) => {
	      model.placa = params['placa'];
	      console.log(model.placa);
	    });
	}

	ngOnInit() {
		let model = this;
	    if(model.placa){
	      console.log('Consultando viajes de ruta');
	      model.obtenerConductoresPlaca();
	    }else{
	      console.log('Consultando todos');
	      model.obtenerConductoresTodos();
	    }
  		
	}
	obtenerConductoresPlaca(){
		let model = this;
		model.myService.getConductoresPlaca(model.placa).subscribe((result:any) => {
        	console.log('Listado de conductores de la placa '+model.placa);
        	console.log(result);
        	model.conductores = result;

        	
            //this.onGetDataSuccess(result);
        }, (error) => {
            //this.onGetDataError(error);
        });
	}
	obtenerConductoresTodos(){
		let model = this;
		model.myService.getConductores().subscribe((result:any) => {
        	console.log('Listado de conductores');
        	console.log(result);
        	model.conductores = result;

        	
            //this.onGetDataSuccess(result);
        }, (error) => {
            //this.onGetDataError(error);
        });
	}

}
