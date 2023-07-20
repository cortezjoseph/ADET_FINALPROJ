import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CcfPage } from './ccf.page';

describe('CcfPage', () => {
  let component: CcfPage;
  let fixture: ComponentFixture<CcfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CcfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
