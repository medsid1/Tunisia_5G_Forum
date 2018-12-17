import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { the5GComponent } from './5G.component'
import { the5GModule } from './5G.module'

describe('5GComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ the5GModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(the5GComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
