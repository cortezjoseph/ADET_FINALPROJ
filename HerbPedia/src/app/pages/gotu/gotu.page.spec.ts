import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GotuPage } from './gotu.page';

describe('GotuPage', () => {
  let component: GotuPage;
  let fixture: ComponentFixture<GotuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GotuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
