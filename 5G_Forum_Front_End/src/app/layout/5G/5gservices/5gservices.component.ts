import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';


@Component({
  selector: 'app-The5gservices',
  templateUrl: './5gservices.component.html',
  styleUrls: ['./5gservices.component.scss']
})
export class The5gservicesComponent implements OnInit {
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) { }

  ngOnInit() {
  }

  load5gservicesData(){
   
    this.mainServiceProvider.load5gservicesData()
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