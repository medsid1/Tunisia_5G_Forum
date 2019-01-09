import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';


@Component({
  selector: 'app-The5gnews',
  templateUrl: './5gnews.component.html',
  styleUrls: ['./5gnews.component.scss']
})
export class The5gnewsComponent implements OnInit {
  
  public items : any ;
  constructor(private mainServiceProvider: MainServiceProvider) { 

    this.loadnewsData();
  }

  ngOnInit() {
  }

  loadnewsData(){
   
    this.mainServiceProvider.loadnewsData()
    .then(data => {

      let newsindexdata = localStorage.getItem('indexnews')
      this.items =JSON.parse(newsindexdata).result; 
      console.log(this.items)
      localStorage.removeItem('indexnews');
    }),(err) => {
          console.log("Erreur");
    };
  }

}