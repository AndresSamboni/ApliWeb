import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaryRocketsComponent } from './sumary.rockets.component';

describe('SumaryRocketsComponent', () => {
  let component: SumaryRocketsComponent;
  let fixture: ComponentFixture<SumaryRocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumaryRocketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumaryRocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
