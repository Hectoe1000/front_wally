import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforWaaliComponent } from './infor-waali.component';

describe('InforWaaliComponent', () => {
  let component: InforWaaliComponent;
  let fixture: ComponentFixture<InforWaaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InforWaaliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InforWaaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
