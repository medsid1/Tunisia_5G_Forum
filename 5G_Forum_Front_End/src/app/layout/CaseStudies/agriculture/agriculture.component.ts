import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';

@Component({
  selector: 'app-Agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) { 
    this.loadagricultureData();
  }

  ngOnInit() {
  }
  loadagricultureData(){
   
    this.mainServiceProvider.loadagricultureData()
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