import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';

@Component({
  selector: 'app-Education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public items : any;
  constructor(private mainServiceProvider: MainServiceProvider) { 
    this.loadeducationData();
  }

  ngOnInit() {
  }

  loadeducationData(){
   
    this.mainServiceProvider.loadeducationData()
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