import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WebService } from "../../ws.service";
import { Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
  animations: [routerTransition()]
})
export class ViajesComponent implements OnInit {
	public viajes:any;
  idRuta:string;
  constructor(private myService: WebService,private activatedRoute: ActivatedRoute) {
    let model = this;
    model.activatedRoute.params.subscribe((params: Params) => {
      model.idRuta = params['idRuta'];
      console.log(model.idRuta);
    });
  }

  ngOnInit() {
  	let model = this;
    if(model.idRuta){
      console.log('Consultando viajes de ruta');
      model.obtenerViajesRuta();
    }else{
      console.log('Consultando todos');
      model.obtenerViajesTodos();
    }
  	

  }
  obtenerViajesRuta(){
    let model = this;
    model.myService.getViajesRuta(model.idRuta).subscribe((result:any) => {
      console.log('Listado de viajes de ruta '+model.idRuta);
      console.log(result);
      model.viajes = result;

      
        //this.onGetDataSuccess(result);
    }, (error) => {
        //this.onGetDataError(error);
    });
  }
  obtenerViajesTodos(){
    let model = this;
    model.myService.getViajesTodos().subscribe((result:any) => {
      console.log('Listado de viajes');
      console.log(result);
      model.viajes = result;

      
        //this.onGetDataSuccess(result);
    }, (error) => {
        //this.onGetDataError(error);
    });
  }
}
