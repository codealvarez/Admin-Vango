import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router} from '@angular/router';
import { WebService } from "../../ws.service";

@Component({
  selector: 'app-crearruta',
  templateUrl: './crearruta.component.html',
  styleUrls: ['./crearruta.component.scss'],
  animations: [routerTransition()]
})
export class CrearrutaComponent implements OnInit {
	lat: number = 51.678418;
 	lng: number = 7.809007;
 	nombreRuta:string;
 	origenRuta:string;
 	destinoRuta:string;
 	terminosRuta:string;
  rutaCreada:boolean=false;
  idRuta:string;
  latitudInicio:number;
  longitudInicio:number;
  latitudFin:number;
  longitudFin:number;
  latitud:number;
  longitud:number;
  constructor(private myService: WebService,private router: Router) { }

  ngOnInit() {
  }
  guardar(){
  	let model = this;
  	
  	if(model.nombreRuta && model.origenRuta && model.destinoRuta && model.terminosRuta){
  		this.myService.crearRuta(model.nombreRuta,model.origenRuta,model.destinoRuta,model.terminosRuta,model.latitudInicio,model.longitudInicio,model.latitudInicio,model.longitudFin)
            .subscribe((result:any) => {
            	console.log(result);
            	if(result.resultado=="OK"){
            		console.log('Login OK');
                localStorage.setItem('rutaActual',result.idruta);
                alert('Ruta guardada. Idruta '+result.idruta);
                //model.rutaCreada=true;
                //model.idRuta=result.idruta;
                model.router.navigate(['verruta/'+result.idruta]);
            	}else{
            		alert('Error: '+result.nombre);
            	}
                //this.onGetDataSuccess(result);
            }, (error) => {
                //this.onGetDataError(error);
            });
  	}else{
  		alert('Debes ingresar todos los datos');
  	}
  }
  agregarPunto(){
    let model = this;
  	this.myService.agregarPuntoRuta(model.idRuta,'N/A','N/A','REFERENCIA',model.latitud,model.longitud)
            .subscribe((result:any) => {
              console.log(result);
              if(result.resultado=="OK"){
                console.log('Login OK');
                localStorage.setItem('rutaActual',result.idruta);
                alert('Punto Agregado.');
              }else{
                alert('Error: '+result.nombre);
              }
                //this.onGetDataSuccess(result);
            }, (error) => {
                //this.onGetDataError(error);
            });
  }

}
