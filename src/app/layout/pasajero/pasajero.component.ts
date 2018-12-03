import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WebService } from "../../ws.service";
import { Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss'],
  animations: [routerTransition()] 
})
export class PasajeroComponent implements OnInit {
	idPasajero:string;
	cedula: string;
  clave: string;
  estado: string;
  grupo: string;
  idmodipay: string;
  idvango: string;
  mail: string;
  nombre: string;
  constructor(private myService: WebService,private activatedRoute: ActivatedRoute) {
  	let model = this;
  	model.activatedRoute.params.subscribe((params: Params) => {
  		model.idPasajero = params['idPasajero'];
  		console.log(model.idPasajero);
  	});
  	model.myService.getPasajero(model.idPasajero).subscribe((res) => {
            
      console.log('Respuesta de los detalles del pasajero: '+model.idPasajero);
      console.log(res);
      model.cedula = res[0].cedula;
      model.clave = res[0].clave;
      model.estado = res[0].estado;
      model.grupo = res[0].grupo;
      model.idmodipay = res[0].idmodipay;
      model.idvango = res[0].idvango;
      model.mail = res[0].mail;
      model.nombre = res[0].nombre;
    }, (error) => {
      alert('Error obteniendo los detalles de la ruta');
    }); 
  }

  ngOnInit() {
  	let model = this;

  }

}
