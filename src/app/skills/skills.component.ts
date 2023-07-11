import { Component } from '@angular/core';


interface Technology {
  name: string;
  image: string;
  link: string;
  proficiency: number;
}


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  technologies: Technology[] = [
    {
      name: 'Angular',
      image: 'path/to/angular.png',
      link: 'https://angular.io/',
      proficiency: 80
    },
    {
      name: 'HTML',
      image: 'path/to/html.png',
      link: 'https://www.w3.org/html/',
      proficiency: 90
    },
    {
      name: 'CSS',
      image: 'path/to/css.png',
      link: 'https://www.w3.org/Style/CSS/',
      proficiency: 70
    },
    // Add more technologies as needed
  ];
}
