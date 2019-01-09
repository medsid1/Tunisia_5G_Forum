import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the MainServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class MainServiceProvider {
    link: any;
    items: any;
    com: any = false;

    constructor(public http: Http) {
        this.link = 'https://localhost:8443';
    }





    ////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
    loadhealthcareData() {

     

            let link = this.link + "/indexes/casestudies/healthcare";

            return new Promise(resolve => {
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');

              
                     
               
                console.log(headers)
                this.http.get(link, { headers: headers })
                    .map(res => res.json())
                    .subscribe(data => {
                        resolve(data);
                        localStorage.setItem('indexdata', JSON.stringify(data));
                    }
                        , (err) => {
                        }
                    );
            });
        
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadentertainmentData() {

 

        let link = this.link + "/indexes/casestudies/entertainment";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

          
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadmanufacturingData() {

        let link = this.link + "/indexes/casestudies/manufacturing";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

           
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadeducationData() {

    

        let link = this.link + "/indexes/casestudies/education";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

          
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadautomativeData() {

    

        let link = this.link + "/indexes/casestudies/automative";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

          
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    



////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadagricultureData() {

  
        let link = this.link + "/indexes/casestudies/agriculture";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

           
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    




////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadnewsData() {

   

        let link = this.link + "/indexes/news";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexnews', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    




////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadsocialmediaData() {

   

        let link = this.link + "/indexes/socialmedia";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

           
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexsocialmedia', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    




////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadpasteventsData() {

   
        let link = this.link + "/indexes/pastevents";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

           
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexpastevents', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    




////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadupcomingeventsData() {

    

        let link = this.link + "/indexes/upcomingevents";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    




////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
load5gservicesData() {

  

        let link = this.link + "/indexes/5gservices";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

           
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexdata', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    



////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadvideosData() {

  
        let link = this.link + "/indexes/videos";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

          
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexvideos', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    



////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadwhitepapersData() {

        let link = this.link + "/indexes/whitepapers";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            
            console.log(headers)
            this.http.get(link, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                    localStorage.setItem('indexwhitepapers', JSON.stringify(data));
                }
                    , (err) => {
                    }
                );
        });
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

}

