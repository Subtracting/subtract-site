import type { Project } from "../types/project";

export const projects: Project[] = [
     {
    title: 'mazegen',
    description: 'Generate a maze using Prims Algorithm and solve it using BFS.',
    image: '/projects/project_maze.png',
    skills: ['Python', 'Algorithms', 'BFS'],
    year: 2024,
  }, {
    title: 'live, laugh, log',
    description: 'A dashboard where you can log and track activities. Such as, hours sleep, pages read, mood and sport. Set yourself a goal, and achieve it - some days at least.',
    image: '/projects/log.png',
    skills: ['React', 'Javascript', 'Dashboard'],
    year: 2023,
  },
  {
    title: 'web graph extension',
    description: 'A Chrome web extension which visualises your browser history in a neat network graph.',
    image: '/projects/none.png',
    skills: ['Javascript', 'Browser Extension', 'Visualisation'],
    link: 'https://github.com/yourusername/crypto-bot',
    year: 2024,
  }, {
    title: 'pathfinder',
    description: 'A route planner you can host yourself, using an open source routing machine. Draw a route, save it and export it to .gpx. Hike, run or bike your own routes!',
    image: '/projects/none.png',
    skills: ['Javascript', 'MongoDB', 'Express', 'OSRM'],
    year: 2023,
  }, {
    title: 'dashboard generator',
    description: 'Load in a .csv file and automatically generate a dashboard. Configure it to your taste.',
    image: '/projects/none.png',
    skills: ['Javascript', 'React', 'Express', 'Dashboard'],
    year: 2023,
  },    {
    title: 'project euler',
    description: '',
    image: '/projects/none.png',
    skills: ['Mathematics', 'Python', 'Pixel Art'],
    year: 2023,
  }
]


