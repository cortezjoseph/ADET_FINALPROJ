import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuavaPage } from './guava.page';

describe('GuavaPage', () => {
  let component: GuavaPage;
  let fixture: ComponentFixture<GuavaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
