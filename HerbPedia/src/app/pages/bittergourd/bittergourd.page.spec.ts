import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BittergourdPage } from './bittergourd.page';

describe('BittergourdPage', () => {
  let component: BittergourdPage;
  let fixture: ComponentFixture<BittergourdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BittergourdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
