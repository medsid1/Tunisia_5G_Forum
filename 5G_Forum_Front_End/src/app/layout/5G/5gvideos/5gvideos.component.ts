import { Component, OnInit, ViewChild } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-The5gvideos',
  templateUrl: './5gvideos.component.html',
  styleUrls: ['./5gvideos.component.scss']
})
export class The5gvideosComponent implements OnInit {
  public items : any ;


  @ViewChild('videoPlayer') videoplayer: any;
  constructor(private mainServiceProvider: MainServiceProvider,public sanitizer: DomSanitizer) {

    this.loadvideosData();
   }

  ngOnInit() {
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
  loadvideosData(){
   
    this.mainServiceProvider.loadvideosData()
    .then(data => {

      let videosindexdata = localStorage.getItem('indexvideos')
      this.items =JSON.parse(videosindexdata).result; 
      console.log(this.items)
      localStorage.removeItem('indexvideos');
    }),(err) => {
          console.log("Erreur");
    };
  }
}