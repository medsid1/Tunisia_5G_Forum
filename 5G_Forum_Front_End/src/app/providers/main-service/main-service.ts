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

        let data1 = localStorage.getItem('useraccesstoken');
        let data2 = localStorage.getItem('userrefreshtoken');
        let data3 = localStorage.getItem('useremail');
        let data4 = localStorage.getItem('userpassword');
        let data5 = localStorage.getItem('userjwt');

        if (data1 || data2 || data3 || data4 || data5) {

            let link = this.link + "/indexes/casestudies/healthcare";

            return new Promise(resolve => {
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');

                let refresh = {
                    refresh_token: JSON.parse(data2),
                    jwt: JSON.parse(data5)
                }
                var now = Math.floor(Date.now() / 1000);
                if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {

                    this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
                        .map(res => res.json())
                        .subscribe(
                            data => {
                                resolve(data)
                                console.log(typeof data)
                                if (data.changed == true) {
                                    localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                                    localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                                }
                            },
                            error => {
                                resolve(error)
                                console.log(error)
                            }
                        )
                }
                headers.append('authorization', 'Bearer' + ' ' + data1);
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
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadentertainmentData() {

    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (data1 || data2 || data3 || data4 || data5) {

        let link = this.link + "/indexes/casestudies/entertainment";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let refresh = {
                refresh_token: JSON.parse(data2),
                jwt: JSON.parse(data5)
            }
            var now = Math.floor(Date.now() / 1000);
            if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {

                this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            resolve(data)
                            console.log(typeof data)
                            if (data.changed == true) {
                                localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                                localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                            }
                        },
                        error => {
                            resolve(error)
                            console.log(error)
                        }
                    )
            }
            headers.append('authorization', 'Bearer' + ' ' + data1);
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
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadmanufacturingData() {

    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (data1 || data2 || data3 || data4 || data5) {

        let link = this.link + "/indexes/casestudies/manufacturing";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let refresh = {
                refresh_token: JSON.parse(data2),
                jwt: JSON.parse(data5)
            }
            var now = Math.floor(Date.now() / 1000);
            if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {

                this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            resolve(data)
                            console.log(typeof data)
                            if (data.changed == true) {
                                localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                                localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                            }
                        },
                        error => {
                            resolve(error)
                            console.log(error)
                        }
                    )
            }
            headers.append('authorization', 'Bearer' + ' ' + data1);
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
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadeducationData() {

    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (data1 || data2 || data3 || data4 || data5) {

        let link = this.link + "/indexes/casestudies/education";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let refresh = {
                refresh_token: JSON.parse(data2),
                jwt: JSON.parse(data5)
            }
            var now = Math.floor(Date.now() / 1000);
            if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {

                this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            resolve(data)
                            console.log(typeof data)
                            if (data.changed == true) {
                                localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                                localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                            }
                        },
                        error => {
                            resolve(error)
                            console.log(error)
                        }
                    )
            }
            headers.append('authorization', 'Bearer' + ' ' + data1);
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
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadautomativeData() {

    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (data1 || data2 || data3 || data4 || data5) {

        let link = this.link + "/indexes/casestudies/automative";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let refresh = {
                refresh_token: JSON.parse(data2),
                jwt: JSON.parse(data5)
            }
            var now = Math.floor(Date.now() / 1000);
            if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {

                this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            resolve(data)
                            console.log(typeof data)
                            if (data.changed == true) {
                                localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                                localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                            }
                        },
                        error => {
                            resolve(error)
                            console.log(error)
                        }
                    )
            }
            headers.append('authorization', 'Bearer' + ' ' + data1);
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
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    



////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadagricultureData() {

    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (data1 || data2 || data3 || data4 || data5) {

        let link = this.link + "/indexes/casestudies/agriculture";

        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let refresh = {
                refresh_token: JSON.parse(data2),
                jwt: JSON.parse(data5)
            }
            var now = Math.floor(Date.now() / 1000);
            if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {

                this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            resolve(data)
                            console.log(typeof data)
                            if (data.changed == true) {
                                localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                                localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                            }
                        },
                        error => {
                            resolve(error)
                            console.log(error)
                        }
                    )
            }
            headers.append('authorization', 'Bearer' + ' ' + data1);
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
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

}

