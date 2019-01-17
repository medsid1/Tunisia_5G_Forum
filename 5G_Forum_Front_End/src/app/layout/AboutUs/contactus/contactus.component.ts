import { Component, OnInit } from '@angular/core';
import { MainServiceProvider } from '../../../providers/main-service/main-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ContactUs',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactUsComponent implements OnInit {
public data ;
  constructor(private mainServiceProvider: MainServiceProvider , private toastr: ToastrService) { 
this.data = {

  firstname : '',
  lastname : '',
  email : '',
  subject : ''
}

  }

  ngOnInit() {
  }
   
  showSuccess() {
    console.log("hello word")
    this.toastr.success('Thanks For Contacting Us');
  }
  showError(){

    this.toastr.error('Contacting Error : Please Try Again ..');
  }
  contactus() {
    this.mainServiceProvider.addmessage(this.data)


    .then( Data  => {
        
     
        console.log(Data)
        this.data.email = '';
        this.data.firstname = '';
        this.data.lastname = '';
        this.data.subject = '';
        this.showSuccess();
    }
      ).catch(() => {

       
        this.data.email = '';
        this.data.firstname = '';
        this.data.lastname = '';
        this.data.subject = '';
        this.showError();
        

      })
      
  }
}