import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RangoonPage } from './rangoon.page';

describe('RangoonPage', () => {
  let component: RangoonPage;
  let fixture: ComponentFixture<RangoonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RangoonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
