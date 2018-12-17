import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { GOVandORGComponent } from './GOVandORG.component'
import { GOVandORGModule } from './GOVandORG.module'

describe('GOVandORGComponent', () => {
  let component: GOVandORGComponent
  let fixture: ComponentFixture<GOVandORGComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          GOVandORGModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(GOVandORGComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
