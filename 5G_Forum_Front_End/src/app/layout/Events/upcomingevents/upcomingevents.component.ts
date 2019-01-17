import { Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
  } from 'date-fns';
import { Router } from '@angular/router';
import { MainServiceProvider } from '../../../providers/main-service/main-service';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    
  },
  blue: {
    primary: '#1e90ff',
    
  },
  yellow: {
    primary: '#e3bc08',
  
  }
};
@Component({
  selector: 'app-UpcomingEvents',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  public items : any ;


  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    
      
  ];
  fakeevents: CalendarEvent[] = [
    
      
  ];
  activeDayIsOpen: boolean = true;


  public permissionlevel : any ;
  public master : boolean = false;

  public newevent : any;
  constructor(public router: Router ,private mainServiceProvider: MainServiceProvider,private modal: NgbModal) {
    this.loaddata()
    console.log(this.events)
    let data5 = localStorage.getItem('userjwt');
    if(data5){

      console.log(data5)
      this.permissionlevel = JSON.parse(data5).roles ;
      console.log(this.permissionlevel)
      if(parseInt(this.permissionlevel) == 1073741824){

        this.master = true
      }else{

        this.master = false
      }
      console.log(this.master)
    }

   }

  ngOnInit() {
  }

  loaddata(){

    this.mainServiceProvider.refreshevents()
    .then(data => {
      let upcomingevents = JSON.parse(localStorage.getItem('indexupcomingevents'))
      console.log(upcomingevents)
      var i ;
      console.log(upcomingevents.result)
      for(i=0; i<upcomingevents.result.length;i++){
        console.log(upcomingevents.result[i])
      var newnew : any ={
        title :  upcomingevents.result[i]._source.title,
        description :upcomingevents.result[i]._source.description,
        start : new Date(upcomingevents.result[i]._source.start),
        end : new Date(upcomingevents.result[i]._source.end),
        color : upcomingevents.result[i]._source.color,
        draggable : upcomingevents.result[i]._source.draggable,
        resizable :upcomingevents.result[i]._source.resizable,
        link :upcomingevents.result[i]._source.link

      };
      this.events.push(newnew)
      console.log(this.events)}
      this.refresh.next();
      localStorage.removeItem('indexupcomingevents')
    }),(err) => {
          console.log("Erreur");
    };
  }
 dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }

    this.newevent = event;
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
    this.newevent = event;
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });

    this.newevent = event;
  }

  addEvent(): void {

    this.newevent = {
      title: 'New event',
      link : 'New link',
      description : 'New description',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }
    this.events.push(this.newevent);
    this.refresh.next();
    
  }
  
  addNewEvent(){
    this.events = [];
    this.events.push(this.newevent);
    this.mainServiceProvider.pushevent(this.newevent)
    .then(data => {

      
    }),(err) => {
          console.log("Erreur");
    };
   
    this.mainServiceProvider.refreshevents()
    .then(data => {
      let upcomingevents = JSON.parse(localStorage.getItem('indexupcomingevents'))
      console.log(upcomingevents)
      var i ;
      console.log(upcomingevents.result)
      for(i=0; i<upcomingevents.result.length;i++){
        console.log(upcomingevents.result[i])
      var newnew : any ={
        title :  upcomingevents.result[i]._source.title,
        description :upcomingevents.result[i]._source.description,
        start : new Date(upcomingevents.result[i]._source.start),
        end : new Date(upcomingevents.result[i]._source.end),
        color : upcomingevents.result[i]._source.color,
        draggable : upcomingevents.result[i]._source.draggable,
        resizable :upcomingevents.result[i]._source.resizable,
        link :upcomingevents.result[i]._source.link

      };
      this.events.push(newnew)
      console.log(this.events)}
      this.refresh.next();
      localStorage.removeItem('indexupcomingevents')
    }),(err) => {
          console.log("Erreur");
    };




  }
  loadupcomingeventsData(){
   
    this.mainServiceProvider.loadupcomingeventsData()
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