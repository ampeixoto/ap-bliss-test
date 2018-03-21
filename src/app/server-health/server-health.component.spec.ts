import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerHealthComponent } from './server-health.component';

describe('ServerHealthComponent', () => {
  let component: ServerHealthComponent;
  let fixture: ComponentFixture<ServerHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
