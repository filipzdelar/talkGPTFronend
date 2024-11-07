import { Component } from '@angular/core';

interface Company {
  name: string;
  image: string;
  data: string;
  title: string;
  projects: {
    image: string;
    description: string;
  }[];
  link: string;
  expanded: boolean;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  companies: Company[] = [
    {
      name: 'Panonit',
      image: '../../assets/images/Panonit.png',
      data: 'data',
      title: 'data',
      link: 'https://panonit.com/homepage',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: "Auto Solver: Web application for auto-scheduling manager\'s schedule and optimizing the result. The position has required full-stack technologies, an understanding of the cloud, and high mathematics. Developed a solver that was only 5% slower than the best one available. However, the solution provided has over 40% higher-quality results on average. My role was designing, developing, and deploying key functionality on the back-end side of this web application. My responsibilities included developing and implementing key features on the backend of the web application, as well as ensuring its smooth operation on the cloud platform. As the project progressed, I also took on the role of mentoring junior software developers"
        },
        {
          image: '../../assets/images/FTN_building.jfif',
          description: "Cropsit: The project was a web and mobile application for detecting anomalies in plants. The detection uses deep neural networks for the classification of the leaves. I designed and implemented the backend systems, creating APIs and services that enabled communication between the front-end interface, databases, and various microservices.",
        },
        {
          image: '../../assets/images/FTN_building.jfif',
          description: "I was involved in the development of a web server that had to communicate with remote digital advertising displays. Specifically, my role in this project centered around the back-end service, where I was responsible for managing external API calls within the software.",
        },
      ],
      expanded: false
    },
    {
      name: 'Codolis',
      image: '../../assets/images/codolis-logo.jpg',
      data: 'data',
      title: 'data',
      link: 'https://www.continental.com/en/',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: 'For this part-time job, I was involved in researching and training models for a project focused on building custom deep neural networks. These networks were specifically designed for the classification and synthesis of one-dimensional medical ECG signals, with the aim of automating the recognition of heart anomalies. The primary goal of the project was to expand the dataset size for classification by synthesizing additional data through adjustments to state-of-the-art models.',
        }
      ],
      expanded: false
    },
    {
      name: 'Continental',
      image: '../../assets/images/Continental.png',
      data: 'data',
      title: 'data',
      link: 'https://codolis.com/',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: 'The developer played an integral role in establishing autonomous communication between vehicles and remote servers (Ramsas 1.5 project).'
        }
      ],
      expanded: false
    },
    {
      name: 'TIAC',
      image: '../../assets/images/tiac-logo.png',
      data: 'data',
      title: 'data',
      link: 'https://tiacgroup.com/',
      projects: [
        {
          image: '../../assets/images/zmajjovina.png',
          description: 'The developer played an integral role in establishing autonomous communication between vehicles and remote servers (Ramsas 1.5 project).'
        }
      ],
      expanded: false
    },
  ]
  toggleDescription(company: Company) {
    company.expanded = !company.expanded;
  }

  getPreviewText(description: string, isExpanded: boolean, maxLength: number): string {
    if (isExpanded)
    {
      return description;
    };

    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substr(0, maxLength) + '...';
    }
  }

}
