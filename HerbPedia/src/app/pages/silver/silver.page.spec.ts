import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilverPage } from './silver.page';

describe('SilverPage', () => {
  let component: SilverPage;
  let fixture: ComponentFixture<SilverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SilverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
