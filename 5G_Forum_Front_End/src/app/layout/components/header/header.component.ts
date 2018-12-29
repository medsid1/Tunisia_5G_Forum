import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    username : any ;
    constructor(private translate: TranslateService, public router: Router) {
    this.loaduserdata();    
       
    }

    ngOnInit() {}

    loaduserdata(){

       
        this.username = JSON.parse(localStorage.getItem('userjwt')).name.toString().replace(/"/gi, "");
        
        
    }

    onLoggedout() {
        localStorage.removeItem('useraccesstoken');
        localStorage.removeItem('userrefreshtoken');
        localStorage.removeItem('useremail');
        localStorage.removeItem('userpassword');
        localStorage.removeItem('userjwt');
    }

    
}
