import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  companies = [
    {
      projects: [
        {
          name: 'Jovan Jovanović Zmaj Gymnasium',
          description: 'He attended a specialized mathematics class. During this period, he competed in the fields of mathematics, physics, chess, and programming.',
          image: '../../assets/images/zmajjovina.png',
          link: 'https://jjzmaj.edu.rs/vesti/'
        },
        {
          name: 'Faculty of Technical Sciences',
          description: "A Bachelor's degree with honors in Computer Science has been attained, showcasing exceptional academic achievements and a strong commitment to the field.",
          image: '../../assets/images/FTN_building.jfif',
          link: 'http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka'
        },
      ],
    },
  ];
}
