import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RingwormPage } from './ringworm.page';

describe('RingwormPage', () => {
  let component: RingwormPage;
  let fixture: ComponentFixture<RingwormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RingwormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
