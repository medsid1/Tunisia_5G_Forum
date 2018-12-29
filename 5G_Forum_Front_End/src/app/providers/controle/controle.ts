import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

/*
  Generated class for the ControleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ControleProvider {

  constructor(public http: Http) {
    console.log('Hello ControleProvider Provider');
  }

  ctrpassword(psw1, psw2){
  console.log(psw1, psw2);
  	if(psw1 !== psw2){
  	return "false"
  	}
  	else{
  	return "true"
  	}
  }

}