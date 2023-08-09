import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  downloadCV() {
    const cvFilePath = '/assets/documents/FilipZdelarCV.pdf'; // Replace with your CV file path
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'FilipZdelarCV.pdf'; // Set the desired filename
    link.click();
  }
}
