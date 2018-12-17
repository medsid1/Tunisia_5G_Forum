import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CaseStudiesComponent } from './CaseStudies.component'
import { CaseStudiesModule } from './CaseStudies.module'

describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent
  let fixture: ComponentFixture<CaseStudiesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CaseStudiesModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudiesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
