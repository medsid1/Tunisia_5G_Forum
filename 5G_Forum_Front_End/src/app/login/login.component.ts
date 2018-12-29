import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { routerTransition } from '../router.animations';
import  'rxjs/add/operator/map';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public data : any ;
    constructor(public router: Router , private authprovider: AuthProvider) {

        this.data = {
            email : '',
            password : ''
        
        }
    }
   

    ngOnInit() {}

    checkLoginDisable() {
        if (this.data.email.length == 0 || this.data.password.length == 0) {
          return false;
        }
        return true;
      }

    signin(url) {
        this.authprovider.login(this.data)


        .then( Data  => {
            
         
            console.log(Data)

            let data1 = localStorage.getItem('useraccesstoken');
            let data2 = localStorage.getItem('userrefreshtoken');
            let data3 = localStorage.getItem('useremail');
            let data4 = localStorage.getItem('userpassword');
            let data5 = localStorage.getItem('userjwt');
            if(data1 && data2 && data3 && data4 && data5){
            this.router.navigateByUrl(url)}else{

            this.data.email = '';
            this.data.password = '';
            }
            }
          ).catch(() => {

           
            this.data.email = '';
            this.data.password = '';
            
            
    
          })
          
      }
    
}
