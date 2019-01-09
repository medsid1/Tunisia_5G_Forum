import { Component, OnInit , EventEmitter, Output , ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MainServiceProvider } from '../../providers/main-service/main-service';

@Component({
    selector: 'app-Home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.scss'],

    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {

    isActive: boolean = false;
    collapsed: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    @Output() collapsedEvent = new EventEmitter<boolean>();


    selectedIndex: number;
    transform: number;
    public items1 : any ;
    public items2 : any ;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public dashboard : boolean ;
    constructor(private mainServiceProvider: MainServiceProvider) {


        this.loadnewsData();
        this.loadsocialmediaData();
        this.selectedIndex = 0;
    this.transform = 100;
        this.dashboard = true;
        this.sliders.push(
            {
                imagePath: 'assets/img/slider/network-3537401_1280.jpg',
                label: 'Towords The Fourth Industrial Revolution',
                text:
                    '5G is expected to be a key enabler for the transition towords tomorrows technologies like industry 4.0'
            },
           
            {
                imagePath:  'assets/img/slider/team-3373638_1280.jpg',
                label: 'Shaping Our Future Together',
                text:
                    'We play an active role in the light of the upcoming revolution to 5G,where new types of services will reshape our society.',
                    
            },
            {
                imagePath: 'assets/img/slider/beverage-3157395_1280.jpg',
                label: 'Promoting 5G services and technologies in years around 2020 and beyond',
                text: 'Tunisian 5G Forum is a common ground, where players of the Tunisian ICT ecosystem work together to achieve the vision of tomorrow along with their peers worldwide.',
              

            },
        );


        
    }
    
    ngOnInit() {}
    loadnewsData(){
   
        this.mainServiceProvider.loadnewsData()
        .then(data => {
    
          let newsindexdata = localStorage.getItem('indexnews')
          this.items1 =JSON.parse(newsindexdata).result; 
          console.log(this.items1)
          localStorage.removeItem('indexnews');
        }),(err) => {
              console.log("Erreur");
        };
      }

    loadsocialmediaData(){
   
        this.mainServiceProvider.loadsocialmediaData()
        .then(data => {
    
          let socialmediaindexdata = localStorage.getItem('indexsocialmedia')
          this.items2 =JSON.parse(socialmediaindexdata).result; 
          console.log(this.items2)
          localStorage.removeItem('indesocialmedia');
        }),(err) => {
              console.log("Erreur");
        };
      }
  
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    
}
