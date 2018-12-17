import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { EventsComponent } from './Events-element.component'
import { EventsModule } from './Events-element.module'

describe('EventsComponent', () => {
  let component: EventsComponent
  let fixture: ComponentFixture<EventsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventsModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
