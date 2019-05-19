import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOauthPropertiesComponent } from './client-oauth-properties.component';

describe('ClientOauthPropertiesComponent', () => {
  let component: ClientOauthPropertiesComponent;
  let fixture: ComponentFixture<ClientOauthPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOauthPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOauthPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
