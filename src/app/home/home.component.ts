import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ContactComponent } from '../contact/contact.component';
import { ChartComponent } from '../chart/chart.component';
import { NgModule } from '@angular/core';
//import { HomeContactModule } from './home.module'
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  content?: string;

  appName = 'My App';
  menuItems = [
    // { label: 'Home', route: '/home' },
    // { label: 'About', route: '/about' },
    { label: 'Education', route: '/education' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
}
