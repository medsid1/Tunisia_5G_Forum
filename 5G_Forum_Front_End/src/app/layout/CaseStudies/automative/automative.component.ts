import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';

@Component({
  selector: 'app-Automative',
  templateUrl: './automative.component.html',
  styleUrls: ['./automative.component.scss']
})
export class AutomativeComponent implements OnInit {
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) {
    this.loadautomativeData();
   }

  ngOnInit() {
  }
  loadautomativeData(){
   
    this.mainServiceProvider.loadautomativeData()
    .then(data => {

      let healthcareindexdata = localStorage.getItem('indexdata')
      this.items =JSON.parse(healthcareindexdata).result; 
      console.log(this.items)
      localStorage.removeItem('indexdata');
    }),(err) => {
          console.log("Erreur");
    };
  }

}