import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  companies = [
    {
      name: 'Company A',
      projects: [
        {
          name: 'FTN',
          description: 'I worked on this',
          image: '../../assets/images/FTN.png',
        },
        {
          name: 'Project 2',
          description: 'Also on this',
          image: '../../assets/images/FTN_building.jfif',
        },
      ],
    },
    // Add more companies and their projects as needed
  ];
}
