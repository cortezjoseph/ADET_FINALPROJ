import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GingerPage } from './ginger.page';

describe('GingerPage', () => {
  let component: GingerPage;
  let fixture: ComponentFixture<GingerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GingerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
