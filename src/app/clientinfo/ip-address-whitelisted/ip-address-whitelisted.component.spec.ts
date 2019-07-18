import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressWhitelistedComponent } from './ip-address-whitelisted.component';

describe('IpAddressWhitelistedComponent', () => {
  let component: IpAddressWhitelistedComponent;
  let fixture: ComponentFixture<IpAddressWhitelistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpAddressWhitelistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddressWhitelistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
