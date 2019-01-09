import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';
@Component({
  selector: 'app-PastEvents',
  templateUrl: './pastevents.component.html',
  styleUrls: ['./pastevents.component.scss']
})
export class PastEventsComponent implements OnInit {
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) {

    this.loadpasteventsData();
   }

  ngOnInit() {
  }
  loadpasteventsData(){
   
    this.mainServiceProvider.loadpasteventsData()
    .then(data => {

      let healthcareindexdata = localStorage.getItem('indexpastevents')
      this.items =JSON.parse(healthcareindexdata).result; 
      console.log(this.items)
      localStorage.removeItem('indexpastevents');
    }),(err) => {
          console.log("Erreur");
    };
  }
}