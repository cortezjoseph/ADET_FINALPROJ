import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GarlicPage } from './garlic.page';

describe('GarlicPage', () => {
  let component: GarlicPage;
  let fixture: ComponentFixture<GarlicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GarlicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
