
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { routerTransition } from '../router.animations';
import  'rxjs/add/operator/map';
import { ControleProvider } from '../providers/controle/controle';


@Component({
    selector:'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'   ],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    public formregister : any ;
    constructor( private controle: ControleProvider,public router: Router , private authprovider: AuthProvider) {

        this.formregister = {
            email : '',
            password : '',
            username : '',
            confirmepassword : ''

        
        }
    }
    checkSignupDisable() {
        if (this.formregister.email.length == 0 || this.formregister.password.length == 0 ||
            this.formregister.username.length == 0 || this.formregister.confirmepassword.length == 0) {
          return false;
        }
        return true;
      }
   
    signup(url) {
        console.log(this.formregister)
        var confpswd = this.controle.ctrpassword(this.formregister.password, this.formregister.confirmepassword);
        if (confpswd === "false") {
          
        }
    
        else { if(this.formregister.username.length > 10){}
        else{
          var dataregister = {
            username: this.formregister.username,
            password: this.formregister.password,
            email: this.formregister.email,
            
          }
          console.log(dataregister)
          this.authprovider.register(dataregister).then(data => {
    
           
              console.log(this.formregister)
              this.router.navigateByUrl(url)
            
          });
        }}
      }
    ngOnInit() {}

    
    
}
