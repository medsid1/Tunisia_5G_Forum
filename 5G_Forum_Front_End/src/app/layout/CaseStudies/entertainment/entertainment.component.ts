import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';

@Component({
  selector: 'app-Entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) { 

    this.loadentertainmentData();
  }

  ngOnInit() {
  }
  loadentertainmentData(){
   
    this.mainServiceProvider.loadentertainmentData()
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