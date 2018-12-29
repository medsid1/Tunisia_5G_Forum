import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import  'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';


@Injectable()
export class AuthProvider {

  link: any;
  Token: any;
  User_id: any;


  constructor(public http: Http) {
    this.link = 'https://localhost:8443';

  }

  /////////////////////////////////////////////////////////////////////////////////// login service //////////////////////////////////////////////////////////////////////////////////////////
  login(cred) {
    let user = JSON.parse(localStorage.getItem('user'));
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let inscrit = {
      email: cred.email,
      password: hash,


    };
    console.log(inscrit)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     
    return   new Promise(resolve => {
      this.http.post(this.link + "/users/login", inscrit, { headers: headers })
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
            localStorage.setItem('useraccesstoken', JSON.stringify(data.accessToken));
            localStorage.setItem('userrefreshtoken', JSON.stringify(data.refreshToken));
            localStorage.setItem('useremail', JSON.stringify(inscrit.email));
            localStorage.setItem('userpassword', JSON.stringify(inscrit.password));
            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
            console.log(data.jwt)

          },
          error => {
            resolve(error)
           
          }
        )
    })
        
    
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////////// register service ////////////////////////////////////////////////////////////////////////////////////////
  register(cred) {
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let headers = new Headers();
    let inscrit = {

      username: cred.username,
      password: hash,
      email: cred.email,
      
    };
    console.log(inscrit)

    headers.append('Content-Type', 'application/json');

   return new Promise(resolve => {
      this.http.post(this.link + "/users/register", inscrit, { headers: headers })
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data)
            console.log(data)
            
          },
          error => {
            resolve(error);
            console.log(error)

            
            
          }
        )
    })
    
    
        
   
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
