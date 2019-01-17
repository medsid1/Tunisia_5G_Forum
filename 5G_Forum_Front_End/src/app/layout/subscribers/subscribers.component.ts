import { Component, OnInit , EventEmitter, Output , ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MainServiceProvider } from '../../providers/main-service/main-service';

@Component({
    selector: 'app-Subscribers',
    templateUrl: './subscribers.component.html',
    styleUrls: ['./subscribers.component.scss'],

    animations: [routerTransition()]
})
export class SubscribersComponent implements OnInit {

 

   


    selectedIndex: number;
    transform: number;
    public items : any ;
    public items1 : any ;
   
    constructor(private mainServiceProvider: MainServiceProvider) {
        

        this.loadsubscribersData();
        this.loadmessagesData();
        


        
    }
    
    ngOnInit() {}
    loadsubscribersData(){
   
        this.mainServiceProvider.loadsubscribersData()
        .then(data => {
    
          let newsindexdata = localStorage.getItem('subscribers')
          this.items =JSON.parse(newsindexdata).result; 
          console.log(this.items)
          localStorage.removeItem('subscribers');
        }),(err) => {
              console.log("Erreur");
        };
      }


      loadmessagesData(){
   
        this.mainServiceProvider.loadmessagesData()
        .then(data => {
    
          let newsindexdata = localStorage.getItem('messages')
          this.items1 =JSON.parse(newsindexdata).result; 
          console.log(this.items1)
          localStorage.removeItem('messages');
        }),(err) => {
              console.log("Erreur");
        };
      }

    
    
}
