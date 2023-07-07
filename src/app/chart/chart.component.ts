import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  companies = [
    {
      name: 'Codolis',
      image: '../../assets/images/Continental.png',
      description: 'data',
      title: 'data',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: 'He attended a specialized mathematics class. During this period, he competed in the fields of mathematics, physics, chess, and programming.',
        },
        {
          image: '../../assets/images/FTN_building.jfif',
          description: "A Bachelor's degree with honors in Computer Science has been attained, showcasing exceptional academic achievements and a strong commitment to the field.",
      
        },
      ],
    },
    {
      name: 'Panonit',
      image: '../../assets/images/Panonit.png',
      data: 'data',
      title: 'data',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: 'He attended a specialized mathematics class. During this period, he competed in the fields of mathematics, physics, chess, and programming.',
        },
        {
          image: '../../assets/images/FTN_building.jfif',
          description: "A Bachelor's degree with honors in Computer Science has been attained, showcasing exceptional academic achievements and a strong commitment to the field.",
      
        },
      ],
    },
    {
      name: 'Codolis',
      image: '../../assets/images/Codolis.png',
      data: 'data',
      title: 'data',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: 'He attended a specialized mathematics class. During this period, he competed in the fields of mathematics, physics, chess, and programming.',
        },
        {
          image: '../../assets/images/FTN_building.jfif',
          description: "A Bachelor's degree with honors in Computer Science has been attained, showcasing exceptional academic achievements and a strong commitment to the field.",
      
        },
      ],
    },
  ]
}
