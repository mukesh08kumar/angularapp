import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicphoneComponent } from './basicphone.component';

describe('BasicphoneComponent', () => {
  let component: BasicphoneComponent;
  let fixture: ComponentFixture<BasicphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
