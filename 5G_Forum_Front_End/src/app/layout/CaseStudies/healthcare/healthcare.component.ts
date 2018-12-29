import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';
@Component({
  selector: 'app-Healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.scss']
})
export class HealthcareComponent implements OnInit {
  public items: any;
  constructor(private mainServiceProvider: MainServiceProvider) {
    this.loadhealthcareData()
   }

  ngOnInit() {
  }
  loadhealthcareData(){
   
    this.mainServiceProvider.loadhealthcareData()
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