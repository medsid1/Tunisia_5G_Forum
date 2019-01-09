import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';


@Component({
  selector: 'app-Whitepapers',
  templateUrl: './whitepapers.component.html',
  styleUrls: ['./whitepapers.component.scss']
})
export class WhitepapersComponent implements OnInit {


  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) { 

    this.loadwhitepapersData();
  }

  ngOnInit() {
  }
  loadwhitepapersData(){
   
    this.mainServiceProvider.loadwhitepapersData()
    .then(data => {

      let whitepapersdexdata = localStorage.getItem('indexwhitepapers')
      this.items =JSON.parse(whitepapersdexdata).result; 
      console.log(this.items)
      localStorage.removeItem('indexwhitepapers');
    }),(err) => {
          console.log("Erreur");
    };
  }
}