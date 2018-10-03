import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { WebService } from "../ws.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
	public username:string;
	public password:string;
    constructor(public router: Router,private myService: WebService) {}

    ngOnInit() {}

    onLoggedin() {
    	const user = this.username;
    	const pass = this.password;
    	this.myService.getLogin(user,pass)
            .subscribe((result:any) => {
            	console.log(result);
            	if(result.resultado=="OK"){
            		console.log('Login OK');
                    localStorage.setItem('nombre',result.nombre);
            		localStorage.setItem('isLoggedin', 'true');
            	}else{
            		alert('Error: '+result.nombre);
            	}
                //this.onGetDataSuccess(result);
            }, (error) => {
                //this.onGetDataError(error);
            });
        //localStorage.setItem('isLoggedin', 'true');
    }
}
