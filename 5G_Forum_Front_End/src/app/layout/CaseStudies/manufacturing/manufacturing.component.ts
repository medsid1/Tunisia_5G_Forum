import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';

@Component({
  selector: 'app-Manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss']
})
export class ManufacturingComponent implements OnInit {
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) { 
    this.loadmanufacturingData();
  }

  ngOnInit() {
  }
  loadmanufacturingData(){
   
    this.mainServiceProvider.loadmanufacturingData()
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