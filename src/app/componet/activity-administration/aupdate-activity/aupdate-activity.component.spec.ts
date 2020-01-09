import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateActivityComponent } from './aupdate-activity.component';

describe('AupdateActivityComponent', () => {
  let component: AupdateActivityComponent;
  let fixture: ComponentFixture<AupdateActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AupdateActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AupdateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
