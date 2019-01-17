import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    
    collapedSideBar: boolean;
    public permissionlevel : any ;
    public master : boolean = false;
    public username : any ;
    constructor() {

        let data1 = localStorage.getItem('useraccesstoken');
        let data2 = localStorage.getItem('userrefreshtoken');
        let data3 = localStorage.getItem('useremail');
        let data4 = localStorage.getItem('userpassword');
        let data5 = localStorage.getItem('userjwt');
        if(data3){
           this.username = data3
        }
        if(data5){

            console.log(data5)
            this.permissionlevel = JSON.parse(data5).roles ;
            console.log(this.permissionlevel)
            if(parseInt(this.permissionlevel) == 1073741824){
      
              this.master = true
            }else{
      
              this.master = false
            }
            console.log(this.master)
          }
    }

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
    onLoggedout(){


        localStorage.removeItem('useraccesstoken');
        localStorage.removeItem('userrefreshtoken');
        localStorage.removeItem('useremail');
        localStorage.removeItem('userpassword');
        localStorage.removeItem('userjwt');
    }
    
}
