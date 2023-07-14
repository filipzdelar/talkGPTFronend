import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  email?: string;
  name?: string;
  message?: string;

  constructor(private http: HttpClient) { }
  submitForm() {

  }
}
