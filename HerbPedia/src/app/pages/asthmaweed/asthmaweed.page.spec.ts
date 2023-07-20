import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsthmaweedPage } from './asthmaweed.page';

describe('AsthmaweedPage', () => {
  let component: AsthmaweedPage;
  let fixture: ComponentFixture<AsthmaweedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsthmaweedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
