import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WoundPage } from './wound.page';

describe('WoundPage', () => {
  let component: WoundPage;
  let fixture: ComponentFixture<WoundPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
