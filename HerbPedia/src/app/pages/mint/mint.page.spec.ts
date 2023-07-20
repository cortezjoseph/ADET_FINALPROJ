import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MintPage } from './mint.page';

describe('MintPage', () => {
  let component: MintPage;
  let fixture: ComponentFixture<MintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
