import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { HomeToTalkComponent } from './home-to-talk.component';
import { HomeToTalkComponent } from './home-to-talk.component';

describe('HomeToTalkComponent', () => {
  let component: HomeToTalkComponent;
  let fixture: ComponentFixture<HomeToTalkComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeToTalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeToTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
