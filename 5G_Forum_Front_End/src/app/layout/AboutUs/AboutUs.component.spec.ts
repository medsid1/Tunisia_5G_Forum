import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AboutUsComponent } from './AboutUs.component'
import { AboutUsModule } from './AboutUs.module'

describe('AboutUsComponent', () => {
  let component: AboutUsComponent
  let fixture: ComponentFixture<AboutUsComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          AboutUsModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
