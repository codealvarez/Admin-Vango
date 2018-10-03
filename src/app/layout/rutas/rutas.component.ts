import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { WebService } from "../../ws.service";

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss'],
  animations: [routerTransition()]
})
export class RutasComponent implements OnInit {
	public rutas:any;
  constructor(private myService: WebService) { }

  ngOnInit() {
  	let model = this;
  	this.myService.getRutasDisponibles(0)
            .subscribe((result:any) => {
            	console.log('Listado de rutas');
            	console.log(result);
            	model.rutas = result;

            	
                //this.onGetDataSuccess(result);
            }, (error) => {
                //this.onGetDataError(error);
            });

  }
}
