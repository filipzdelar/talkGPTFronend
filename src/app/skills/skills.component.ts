import { Component } from '@angular/core';


interface Technology {
  name: string;
  image: string;
  link: string;
  proficiency: number;
}

interface Groups{
  name: string, 
  tehnology_groups: Technology[],
  expanded: boolean
}


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  technologies_backend: Technology[] = [
    {
      name: '.NET',
      image: '../../assets/images/skills/NET.png',
      link: '',
      proficiency: 80
    },
    {
      name: 'RabbitMQ',
      image: '../../assets/images/skills/rabbitmq.svg',
      link: '',
      proficiency: 70
    }
  ];

  technologies_frontend: Technology[] = [
    {
      name: 'Angular',
      image: '../../assets/images/skills/angular.png',
      link: '',
      proficiency: 70
    },
    {
      name: 'React',
      image: '../../assets/images/skills/react.png',
      link: '',
      proficiency: 70
    },
    // Add more technologies as needed
  ];

  
  technologies_ai: Technology[] = [
    {
      name: 'Python',
      image: '../../assets/images/skills/python.png',
      link: '',
      proficiency: 80
    }
  ];


  technologies_cloud: Technology[] = [
    {
      name: 'Azure',
      image: '../../assets/images/skills/azure.png',
      link: '',
      proficiency: 90
    }
  ];


  technologies_others: Technology[] = [
    
  ];


  groups_t : Groups[] = [
    {
      name: "BackEnd",
      tehnology_groups: this.technologies_backend,
      expanded: false
    },
    {
      name: "FrontEnd",
      tehnology_groups: this.technologies_frontend,
      expanded: false
    },
    {
      name: "AI",
      tehnology_groups: this.technologies_ai,
      expanded: false
    },
    {
      name: "Cloud",
      tehnology_groups: this.technologies_cloud,
      expanded: false
    },
    {
      name: "Others",
      tehnology_groups: this.technologies_others,
      expanded: false
    }
  ] 

  groups = [
    { name: 'Group 1', elements: ['Element 1.1', 'Element 1.2', 'Element 1.3'], expanded: false },
    { name: 'Group 2', elements: ['Element 2.1', 'Element 2.2', 'Element 2.3'], expanded: false },
    { name: 'Group 3', elements: ['Element 3.1', 'Element 3.2', 'Element 3.3'], expanded: false }
  ];

  toggleGroup(index: number) {
    this.groups_t[index].expanded = !this.groups_t[index].expanded;
  }
}
